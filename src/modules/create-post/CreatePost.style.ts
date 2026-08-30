// src/modules/home/screens/CreatePost.style.ts

import { colorScheme } from "../../shared/constants/colors";
import genStyles from "../../shared/constants/generic.styles";
import { borderRad } from "../../shared/constants/ui-sizes";
import { uiText } from "../../shared/constants/ui-styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme.background,
  },
  header: {
    ...genStyles.flexRow,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colorScheme.divider,
  },
  headerTitle: {
    ...uiText.Header,
    fontSize: 18,
    fontWeight: '600',
    flex: 1, // Ensures the title takes up all available space
    textAlign: 'center', // Centers the text within its container
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 15,
  },
  userInfoContainer: {
    ...genStyles.flexRow,
    alignItems: 'center',
    marginBottom: 20,
  },
  userAvatarContainer: {
    marginRight: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: borderRad.circle,
    backgroundColor: colorScheme.button_bg2,
  },
  userNameContainer: {
    flex: 1,
  },
  userName: {
    ...uiText.Text,
    fontWeight: '600',
    marginBottom: 3,
  },
  verifiedContainer: {
    ...genStyles.flexRow,
    alignItems: 'center',
  },
  schoolName: {
    ...uiText.Caption,
    color: colorScheme.textSecondary,
  },
  composerContainer: {
    marginBottom: 20,
  },
  textInput: {
    ...uiText.Text,
    backgroundColor: colorScheme.background3,
    borderRadius: borderRad.small,
    padding: 15,
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: 'top',
    color: colorScheme.textPrimary,
  },
  helperText: {
    ...uiText.Caption,
    color: colorScheme.textTetiary,
    marginTop: 8,
    marginLeft: 5,
  },
  attachmentActionsContainer: {
    ...genStyles.flexRow,
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colorScheme.divider,
  },
  actionButton: {
    ...genStyles.flexCol,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  actionLabel: {
    ...uiText.Caption,
    color: colorScheme.textSecondary,
    marginTop: 5,
  },
  cardContainer: {
    backgroundColor: colorScheme.background3,
    borderRadius: borderRad.mid,
    padding: 15,
    marginBottom: 20,
  },
  cardTitle: {
    ...uiText.Text,
    fontWeight: '600',
    marginBottom: 15,
  },
  postTypeContainer: {
    ...genStyles.flexRow,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postTypeButton: {
    width: '48%',
    backgroundColor: colorScheme.background2,
    borderRadius: borderRad.small,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colorScheme.divider,
  },
  selectedPostTypeButton: {
    borderColor: colorScheme.primaryPurple,
    backgroundColor: `${colorScheme.primaryPurple}10`,
  },
  postTypeLabel: {
    ...uiText.Caption,
    color: colorScheme.textSecondary,
  },
  selectedPostTypeLabel: {
    color: colorScheme.primaryPurple,
    fontWeight: '600',
  },
  audienceContainer: {
    ...genStyles.flexRow,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  audienceButton: {
    width: '48%',
    backgroundColor: colorScheme.background2,
    borderRadius: borderRad.small,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colorScheme.divider,
  },
  selectedAudienceButton: {
    borderColor: colorScheme.primaryPurple,
    backgroundColor: `${colorScheme.primaryPurple}10`,
  },
  audienceLabel: {
    ...uiText.Caption,
    color: colorScheme.textSecondary,
  },
  selectedAudienceLabel: {
    color: colorScheme.primaryPurple,
    fontWeight: '600',
  },
  audienceHelperText: {
    ...uiText.Caption,
    color: colorScheme.textTetiary,
    fontSize: 12,
  },
});

export default styles;