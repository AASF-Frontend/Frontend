import './Faq_section.css';
import React, { useEffect } from 'react';
import faqImg from '../Images/faqImg.png';

function Faq_section() {
    useEffect(() => {
        const items = document.querySelectorAll(".accordion button");

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');

            for (let i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
            }

            if (itemToggle === 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }

        items.forEach(item => item.addEventListener('click', toggleAccordion));

        return () => {
            items.forEach(item => item.removeEventListener('click', toggleAccordion));
        };
    }, []); // Empty dependency array to run effect only once

    return (
        <div className=' imagesAndQuestions max-w-[1300px] w-auto m-auto flex gap-10 ' >

            <img src={faqImg} alt="" />

            <div class="container flex-col max-w-[1300px] w-auto m-auto ">
                <h2 className=' faqHeading text-[55px]' >Frequently Asked Questions</h2>
                <div class="accordion">
                    <div class="accordion-item">
                        <div className='QueAndButton' >
                            <button className='' id="accordion-button-1" aria-expanded="false"><span class="accordion-title">Why is the moon sometimes out during the day?</span><span class="icon" aria-hidden="true"></span></button>
                            <div class="accordion-content">
                                <div class='answers' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div className='QueAndButton' >
                            <button className='' id="accordion-button-1" aria-expanded="false"><span class="accordion-title">Why is the moon sometimes out during the day?</span><span class="icon" aria-hidden="true"></span></button>
                            <div class="accordion-content">
                                <div class='answers' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div className='QueAndButton' >
                            <button className='' id="accordion-button-1" aria-expanded="false"><span class="accordion-title">Why is the moon sometimes out during the day?</span><span class="icon" aria-hidden="true"></span></button>
                            <div class="accordion-content">
                                <div class='answers' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div className='QueAndButton' >
                            <button className='' id="accordion-button-1" aria-expanded="false"><span class="accordion-title">Why is the moon sometimes out during the day?</span><span class="icon" aria-hidden="true"></span></button>
                            <div class="accordion-content">
                                <div class='answers' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div className='QueAndButton' >
                            <button className='' id="accordion-button-1" aria-expanded="false"><span class="accordion-title">Why is the moon sometimes out during the day?</span><span class="icon" aria-hidden="true"></span></button>
                            <div class="accordion-content">
                                <div class='answers' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq_section;
