import React from 'react'
import { HeaderTextList, HR, HRbody } from './styles';

export default function Hr ({ text, hrPadding }) {    
    return (
        <HRbody>            
            <HeaderTextList>{text}</HeaderTextList>				
            <HR />
        </HRbody>
    )
}
