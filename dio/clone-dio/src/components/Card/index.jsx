import React from 'react';

import {
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo
} from "./styles";
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground/>
            <Content>
                <UserInfo>
                    <UserPicture/>
                    <div>
                        <h4>Igor Franco</h4>
                        <p>Há 10 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito para o curso de HTML e CSS no bootCamp dio do Global avanade ... <strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#GTML #CSS #JavaScript</h4>
                    <p>
                       <FiThumbsUp/> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export {Card}
