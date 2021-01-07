import React, {useState} from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
// import Image from 'gatsby-image'
// import HeroImage from '../../static/img/home-hero-image.png'

const Hero = (props) => {
    const { title, subtitle, imageSrc, blockItems, onSelect } = props;
    return(
        <HeroContainer>
            <div className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <h1 className="section-title">{title}</h1>
                            <h4 className="section-subtitle">{subtitle}</h4>
                            <div className="blocks mt-5" onClick={onSelect}>
                                {blockItems.map(item => (
                                    <Link to={item.link} state={{ id: item.key }}>
                                        <Block data={item} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="column is-half has-text-right">
                            <img height="25em" src={imageSrc} alt="home hero image" />
                            {/* <Image fixed={HeroImage} /> */}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </HeroContainer>
    )
}

const Block = ({data}) => {
    const [isHovered, setIsHovered] = useState(false);
    const toggleHover = () => {
        setIsHovered(() => !isHovered);
    }
    return(
        <div
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className="block">
            <figure className="image">
                {isHovered ? <img src={data.imageHover} /> : <img src={data.image} />}
            </figure>
            <h3 className="title-2">{data.title}</h3>
            <div className="icon">
                {/* <img src="/img/left-arrow.svg" /> */}
                {isHovered ? <img width={'36px'} src="/img/icons/left-arrow-hover.svg" /> : <img src="/img/left-arrow.svg" />}
            </div>
        </div>
    )
}


const HeroContainer = styled.section`
    .blocks {
        display: flex;
        flex-wrap: wrap;
    }
    .block {
        text-align: center;
        padding: 1rem;
        width: 174px;
        height: 174px;
        margin-right: 10px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #DDDDDD;
        cursor: pointer;
        :hover {
            background-color: #1C1C1E;
            transition: all 0.5s ease;
            h3 {
                color: #FFFFFF;
            }
        }
        .image {
            margin-bottom: 10px;
            img {
                width: 50px;
                height: 50px;
            }
        }
        h3 {
            margin-bottom: 10px;
        }
        .icon {
            width: 36px;
        }
    }
    @media screen and (max-width: 786px) {
        .blocks {
            justify-content: flex-start;
        }
        .block {
            width: 150px;
            height: 150px;
            .image {
                margin-bottom: 5px;
                img {
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
`

export default Hero;