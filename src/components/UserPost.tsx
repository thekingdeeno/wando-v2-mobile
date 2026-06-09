import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import HeartIcon from "../asset/svg/HeartIcon"
import HeartFilledIcon from "../asset/svg/HeartIconFill"
import ChatIcon from "../asset/svg/ChatIcon"
import ChatIconDots from "../asset/svg/ChatIconDots"
import ChatIconFill from "../asset/svg/ChatIconFill"
import ShareArrowIcon from "../asset/svg/ShareIcon"
import ArrowDownUp from "../asset/svg/ArrowDownUp"
import { uiText } from "../shared/constants/ui-styles"
import BookmarkIcon from "../asset/svg/Bookmark"
import VerticalDots from "../asset/svg/VerticalDots"
import { colorScheme } from "../shared/constants/colors"
import { formatTimeSince } from "../shared/utils/helper"
import { borderRad } from "../shared/constants/ui-sizes"
import genStyles from "../shared/constants/generic.styles"


interface PostDataProps {
    postData:{
        username: string;
        affiliation: string;
        pfpUrl: string;
        imgUrl: string;
        date: number; // Unix timestamp
        caption: string;
        likes: number;
        comments: number;
        shares: number;
        reposts: number;
    }
}

const UserPost = ({postData}: PostDataProps)=>{

    const {username, affiliation, pfpUrl, imgUrl, date, caption, likes, comments, shares, reposts} = postData;

    return(
        <View style={{backgroundColor: colorScheme.background3, borderRadius: borderRad.mid, padding: 10}}>
            <View style={styles.topSection}>
                <View style={{marginHorizontal: 10}}>
                    <Image 
                    source={{
                        uri: pfpUrl
                    }} 
                    style={{
                        width: 45,
                        height: 45
                    }}
                    />
                </View>
                <View>
                    <Text style={{...uiText.Text}}>{username}</Text>
                    <Text style={{...uiText.TextSecondary}}>{affiliation}</Text>
                    <View>
                        <Text style={{...uiText.TextSecondary}}>{formatTimeSince(date)}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{position: 'relative', left: 140, padding: 10}}>
                    <VerticalDots color={colorScheme.textSecondary} size={2}/>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical: 20}}>
                <Text style={{...uiText.Text, color: colorScheme.textPrimary}}>{caption}</Text>
                <View>
                    {/* tags */}
                </View>
            </View>

            <View style={{borderRadius: borderRad.tiny, overflow:'hidden'}}>
                <Image 
                source={{
                    uri: imgUrl
                }} 
                style={{
                    
                    width: '100%',
                    height: 200
                }}
                />
            </View>
            <View style={{paddingVertical: 20, display: 'flex', flexDirection:'row', justifyContent:'space-between' }}>
                <View style={{ ...genStyles.flexRow,justifyContent: 'space-between', width:'55%'}}>
                    <View style={{ ...genStyles.flexRow,justifyContent: 'space-between', gap: 5}}>
                        <HeartFilledIcon color={colorScheme.primaryPurple} size={20} />
                        <Text style={{...uiText.TextSecondary}}>{likes}</Text>
                    </View>
                    <View style={{ ...genStyles.flexRow,justifyContent: 'space-between', gap: 5}}>
                        <ChatIcon color={colorScheme.textSecondary} size={15} />
                        <Text style={{...uiText.TextSecondary}}>{comments}</Text>
                    </View>
                    <View style={{ ...genStyles.flexRow,justifyContent: 'space-between', gap: 5}}>
                        <ShareArrowIcon color={colorScheme.textSecondary} size={16}/>
                        <Text style={{...uiText.TextSecondary}}>{shares}</Text>
                    </View>
                    <View style={{ ...genStyles.flexRow,justifyContent: 'space-between', gap: 7}}>
                        <ArrowDownUp color={colorScheme.textSecondary} size={15}/>
                        <Text style={{...uiText.TextSecondary}}>{reposts}</Text>
                    </View>
                </View>
                <View>
                    <BookmarkIcon color={colorScheme.textSecondary} size={12} />

                </View>
            </View>
        </View>
    )
}

export default UserPost;


const styles = StyleSheet.create({
    container: {

    },
    topSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        width: '100%'
    },


})