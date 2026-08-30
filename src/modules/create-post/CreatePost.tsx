// src/modules/home/screens/CreatePostScreen.tsx
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { colorScheme } from '../../shared/constants/colors';
import { uiText } from '../../shared/constants/ui-styles';
import { borderRad } from '../../shared/constants/ui-sizes';
import genStyles from '../../shared/constants/generic.styles';
import Button from '../../components/Button';
import CloseIcon from '../../asset/svg/CloseIcon';
import ChevronLeft from '../../asset/svg/ChevronLeft'; // Using ChevronLeft as dropdown indicator
import UploadIcon from '../../asset/svg/UploadIcon'; // Using UploadIcon for photo
import LocationPinIcon from '../../asset/svg/LocationPin';
import SearchIcon from '../../asset/svg/SearchIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './CreatePost.style';
import HeartIcon from '../../asset/svg/HeartIcon';

interface PostType {
  id: string;
  label: string;
}

interface AudienceOption {
  id: string;
  label: string;
}

const CreatePostScreen = () => {
  const navigation = useNavigation<any>();
  
  const [postContent, setPostContent] = useState<string>('');
  const [selectedPostType, setSelectedPostType] = useState<string>('general');
  const [selectedAudience, setSelectedAudience] = useState<string>('everyone');
  const [isContentValid, setIsContentValid] = useState<boolean>(false);

  // Post type options
  const postTypes: PostType[] = [
    { id: 'general', label: 'General' },
    { id: 'question', label: 'Question' },
    { id: 'event', label: 'Event' },
    { id: 'looking', label: 'Looking for' },
    { id: 'study', label: 'Study' },
    { id: 'announcement', label: 'Announcement' },
  ];

  // Audience options
  const audienceOptions: AudienceOption[] =  [
    { id: 'everyone', label: 'Everyone' },
    { id: 'school', label: 'My School' },
    { id: 'nearby', label: 'Nearby' },
    { id: 'communities', label: 'My Communities' },
  ];

  // Handle content changes
  const handleContentChange = (text: string) => {
    setPostContent(text);
    setIsContentValid(text.trim().length > 0);
  };

  // Handle post submission
  const handlePost = () => {
    // In a real app, this would call an API
    console.log('Posting:', { postContent, selectedPostType, selectedAudience });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme.background }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CloseIcon color={colorScheme.textPrimary} size={15} />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Create Post</Text>
          
          <Button 
            text="Post" 
            color={isContentValid ? "primary" : "secondary"} 
            onPress={handlePost}
          />
        </View>

        <ScrollView 
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* User Info */}
          <View style={styles.userInfoContainer}>
            <View style={styles.userAvatarContainer}>
              <View style={styles.userAvatar} />
            </View>
            
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>James Peterson</Text>
              <View style={styles.verifiedContainer}>
                <Text style={styles.schoolName}>University of Toronto</Text>
                {/* <ChevronLeft size={12} color={colorScheme.textPrimary} style={{ marginLeft: 5 }} /> */}
              </View>
            </View>
          </View>

          {/* Post Composer */}
          <View style={styles.composerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="What's on your mind?"
              placeholderTextColor={colorScheme.textTetiary}
              multiline
              value={postContent}
              onChangeText={handleContentChange}
              textAlignVertical="top"
            />
            
            <Text style={styles.helperText}>Share something with your community...</Text>
          </View>

          {/* Attachment Actions */}
          <View style={styles.attachmentActionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <UploadIcon color={colorScheme.primaryPurple} size={20} />
              <Text style={styles.actionLabel}>Photo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <SearchIcon color={colorScheme.primaryPurple} size={20} />
              <Text style={styles.actionLabel}>Video</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <LocationPinIcon color={colorScheme.primaryPurple} size={20} />
              <Text style={styles.actionLabel}>Location</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <HeartIcon color={colorScheme.primaryPurple} size={20} />
              <Text style={styles.actionLabel}>Feeling</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <SearchIcon color={colorScheme.primaryPurple} size={20} />
              <Text style={styles.actionLabel}>Topic</Text>
            </TouchableOpacity>
          </View>

          {/* Post Type Card */}
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>What kind of post is this?</Text>
            
            <View style={styles.postTypeContainer}>
              {postTypes.map((type) => (
                <TouchableOpacity
                  key={type.id}
                  style={[
                    styles.postTypeButton,
                    selectedPostType === type.id && styles.selectedPostTypeButton
                  ]}
                  onPress={() => setSelectedPostType(type.id)}
                >
                  <Text 
                    style={[
                      styles.postTypeLabel,
                      selectedPostType === type.id && styles.selectedPostTypeLabel
                    ]}
                  >
                    {type.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Audience Card */}
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Who can see this?</Text>
            
            <View style={styles.audienceContainer}>
              {audienceOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.audienceButton,
                    selectedAudience === option.id && styles.selectedAudienceButton
                  ]}
                  onPress={() => setSelectedAudience(option.id)}
                >
                  <Text 
                    style={[
                      styles.audienceLabel,
                      selectedAudience === option.id && styles.selectedAudienceLabel
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <Text style={styles.audienceHelperText}>
              Anyone on Wando can see and interact with this post.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CreatePostScreen;