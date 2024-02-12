import React from 'react'
import stakingW from "../../../assets/icons/info-circle.svg";
import tokenLogo1 from "../../../assets/images/tokenImg1.png";
import tokenLogo2 from "../../../assets/images/ETH.png";
import tokenLogo3 from "../../../assets/images/BNB-1.svg";
import tokenLogo4 from "../../../assets/images/tokenLogo4.png";
import tokenLogo5 from "../../../assets/images/tokenLogo5.png";
import TransactionsIcon from "../../../assets/images/transactionIcon.png";
import mixi_logo from "../../../assets/images/mixi_logo.png";
import '../staking/staking.scss'
import { Link } from 'react-router-dom';
const StakingPage = () => {
    const title = "Staking";
    const subTitle = "Staking your $MIXI and deep dive in the cosmo space.";
    const desc = "How does Staking work?";
    const stakingCardTitle1 = "Single-Sided Pool";
    const stakingCardTitle2 = "Liquidity Pool";
  return (
    <section className='staking_area'>
        <div className="section_title">
            <h1>{title}</h1>
            <h5>{subTitle}</h5>
            <p><img src={stakingW} alt="staking work?" />{desc}</p>
        </div>
        <div className="staking_cards">
            <div className="single__item">
                <h3>{stakingCardTitle1}</h3>
                <div className="staking_service">
                    <div className="staking_single_service apy">
                        <p>APY</p>
                        <button>up to 50 ?%</button>
                    </div>
                    <div className="staking_single_service token">
                        <p>token</p>
                        <div className='token_logos'>
                            <figure>
                                <img src={tokenLogo1} alt="" />
                            </figure>
                        </div>
                    </div>
                    
                    <div className='staking_single_service cap'>
                        <p>cup</p>
                        <span>6.900.000</span>
                    </div>
                </div>
                <button className='comming_btn'>comming soon</button>
            </div>
            <div className="single__item">
                <h3>{stakingCardTitle2}</h3>
                <div className="staking_service d-flex">
                    <div className="staking_single_service apy">
                        <p>APY</p>
                        <button>up to ?%</button>
                    </div>
                    <div className="staking_single_service token">
                        <p>token</p>
                        <div className='token_logos d-flex'>
                            <figure>
                                <img src={tokenLogo2} alt="" />
                            </figure>
                            <figure>
                                <img src={tokenLogo3} alt="" />
                            </figure>
                            <figure>
                                <img src={tokenLogo4} alt="" />
                            </figure>
                            <figure>
                                <img src={tokenLogo5} alt="" />
                            </figure>
                        </div>
                    </div> 
                    <div className='staking_single_service cap'>
                        <p>cup</p>
                        <span>TBD</span>
                    </div>
                </div>
                <button className='comming_btn'>comming soon</button>
            </div>
        </div>

        <div className="active_transactions d-flex justify-content-between">
            <span>Active</span>
            <button>View Transactions <img src={TransactionsIcon} alt="" /></button>
        </div>
        <div className="activated_staking_pool d-block text-center">
            <Link to='/' className='site_logo'>
                <img src={mixi_logo} alt="" />
            </Link>
            <h5>You have no activated Staking Pool yet</h5>
            <p>Using the Activate button on each Staking Pool.</p>
        </div>
    </section>
  )
}

export default StakingPage
