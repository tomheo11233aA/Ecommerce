import React from 'react'
import Box from '@common/Box'
import { width, height } from '@utils/responsive'

const SkeletonBox = () => {
    return (
        <Box
            marginBottom={20}
            marginLeft={5}
            row
        >
            <Box
                width={width * 0.4}
                height={height * 0.3}
                backgroundColor={'white'}
                radius={10}
            />
            <Box
                width={width * 0.4}
                height={height * 0.3}
                backgroundColor={'white'}
                radius={10}
                marginLeft={20}
            />
            <Box
                width={width * 0.4}
                height={height * 0.3}
                backgroundColor={'white'}
                radius={10}
                marginLeft={20}
            />
            <Box
                width={width * 0.4}
                height={height * 0.3}
                backgroundColor={'white'}
                radius={10}
                marginLeft={20}
            />
        </Box>
    )
}

export default React.memo(SkeletonBox)
