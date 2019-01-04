import * as React from 'react';
import { Image } from 'react-primitives';


export type Props = { uri: string, size: number }

const ProfileImage = (props: Props) => (
    <Image
        style={{
            width: props.size,
            height: props.size,
            borderRadius: props.size / 2
        }}
        resizeMode="cover"
        source={{ uri: props.uri }}
    />
)


ProfileImage.defaultProps = {
    uri: "http://www.placecage.com/c/40/40",
    size: 40
}

export default ProfileImage;