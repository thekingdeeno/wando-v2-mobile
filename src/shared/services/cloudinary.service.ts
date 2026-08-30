type ResourceType = 'image' | 'video' | 'raw' | 'auto';

type UploadFileInput = {
  uri: string;
  name: string;
  type: string;
};

type UploadOptions = {
  folder?: string;
  resourceType?: ResourceType;
  publicId?: string;
};

type CloudinarySignatureResponse = {
  cloudName: string;
  apiKey: string;
  signature: string;
  timestamp: number;
  uploadPreset?: string;
  folder?: string;
  publicId?: string;
  resourceType?: ResourceType;
  uploadUrl?: string;
};

const API_BASE_URL = process.env.EXPO_PUBLIC_APP_BASE_URL;

const SIGN_UPLOAD_ENDPOINT = '/cloudinary/sign-upload';
const CONFIRM_UPLOAD_ENDPOINT = '/cloudinary/confirm-upload';

// Change these endpoint paths if your backend uses different names.
const requestUploadToken = async (
  options: UploadOptions = {}
): Promise<CloudinarySignatureResponse> => {
  const response = await fetch(`${API_BASE_URL}${SIGN_UPLOAD_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      folder: options.folder,
      resourceType: options.resourceType ?? 'image',
      publicId: options.publicId,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to get Cloudinary upload token: ${errorText}`);
  }

  return response.json() as Promise<CloudinarySignatureResponse>;
};

const uploadFile = async (
  file: UploadFileInput,
  options: UploadOptions = {}
) => {
  const token = await requestUploadToken(options);

  const resourceType = options.resourceType ?? token.resourceType ?? 'image';

  const formData = new FormData();
  formData.append('file', {
    uri: file.uri,
    name: file.name,
    type: file.type,
  } as any);

  formData.append('api_key', token.apiKey);
  formData.append('timestamp', String(token.timestamp));
  formData.append('signature', token.signature);

  if (token.uploadPreset) {
    formData.append('upload_preset', token.uploadPreset);
  }

  if (token.folder || options.folder) {
    formData.append('folder', token.folder ?? options.folder ?? '');
  }

  if (token.publicId || options.publicId) {
    formData.append('public_id', token.publicId ?? options.publicId ?? '');
  }

  const uploadUrl =
    token.uploadUrl ??
    `https://api.cloudinary.com/v1_1/${token.cloudName}/${resourceType}/upload`;

  const uploadResponse = await fetch(uploadUrl, {
    method: 'POST',
    body: formData,
  });

  if (!uploadResponse.ok) {
    const errorText = await uploadResponse.text();
    throw new Error(`Cloudinary upload failed: ${errorText}`);
  }

  const result = await uploadResponse.json();

  return {
    url: result.secure_url ?? result.url,
    publicId: result.public_id,
    resourceType: result.resource_type,
    width: result.width,
    height: result.height,
  };
};

const confirmUploadToBackend = async (payload: {
  url: string;
  publicId?: string;
  resourceType?: string;
}) => {
  const response = await fetch(`${API_BASE_URL}${CONFIRM_UPLOAD_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to confirm upload: ${errorText}`);
  }

  return response.json();
};

export { requestUploadToken, uploadFile, confirmUploadToBackend };