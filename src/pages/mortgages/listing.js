import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const MortgageListings = (props) => {

    const [mortgageListingHtml, setMortgageListingHtml] = useState('');

    const appendScript = () => {
        const script = document.createElement("script");
        script.src = "https://www.ratehub.ca/assets/js/widget-loader.js";
        script.async = true;
        document.body.appendChild(script);
    }

    useEffect(() => {
        // console.log(props);
        // const { id } = props.location.state;
        appendScript();
        setMortgageListingHtml(`<div>
        <div class="widget" data-widget="mtg-table" data-purchase="true" data-lang="en"></div>
     </div>`)
    }, []);

    return(
        <Layout>
            <div className="container my-6">
                <MortgageStyledContainer>
                    <h1 className="section-title">Recommended mortgages for you</h1>
                    <h4 className="section-subtitle">Based on your answers, we’ve provided the top matches for you to compare below. Review and select the one that best matches your needs.</h4>
                    <div className="content" dangerouslySetInnerHTML={{__html: mortgageListingHtml}}></div>
                </MortgageStyledContainer>
            </div>
        </Layout>
    )
}

const MortgageStyledContainer = styled.div`
    .rh-all-rates-table {
        max-width: 100%;
        .rh-sortable-table .banner {
            display: flex;
            align-items: center;
            background-color: #FFFFFF;
            box-shadow: none;
            .banner-left, .banner-right {
                display: none;
            }
            .banner-col {
                padding: 0 4em;
                &.col-rate {
                    width: 20%;
                }
                &.col-pay {
                    width: 20%;
                }
                &.col-provider {
                    width: 60%;
                }
            }
        }
        .rh-tabs {
            ul.nav.nav-tabs li a {

            }
        }
        .tab-content {
            a.rh-toggle-bar {
                background-color: #1C1C1E;
                color: #FFFFFF;
                cursor: pointer;
                border: 1px solid #1C1C1E;
                :hover {
                    background-color: #FFFFFF;
                    color: #1C1C1E;
                }
            }
            a.rh-toggle-bar+.toggle-content {
                background-color: #FFFFFF;
                border: 1px solid #1C1C1E;
                box-shadow: none;
            }
        }
        .col-action {
        display: none;
        }
        .featured-label {
            display: none;
        }
        .col-rate {
            width: 20%;
            vertical-align: middle;
        }
        .col-pay {
            width: 20%;
            vertical-align: middle;
        }
        .col-provider {
            width: 60%;
            vertical-align: middle;
            .provider-logo img {
                width: 100px;
            }
            .provider-name {
                font-size: 1.2rem;
            }
        }
        a {
            color: #1C1C1E;
            :hover {
                text-decoration: none;
                cursor: default;
            }
        }
        table {
            tbody {
                tr {
                    border: 1px solid #1C1C1E;
                }
                td {
                    color: #1C1C1E;
                }
            }
        }
        .popover {
            display: none !important;
        }
        .rh-stub {
            margin-top: 2rem;
            a.stub {
                color: #1C1C1E;
            }
            canvas {
            display: none;
        }
        }
    }
`

export default MortgageListings;



