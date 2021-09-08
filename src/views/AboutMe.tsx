import { FC } from 'react';

import './AboutMe.scss';
interface props {
    language:boolean
}
const AboutMe: FC<props> = (props) => {
    return (
        <section id="about-me" className="about-me">
            <div className="about-me__header">
                <h2>

                    {(() => {
                        if(props.language){
                            return (
                                <>
                                    <span className="about-me__upper">About</span>
                                    <span className="about-me__lower">Me</span>
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <span className="about-me__lower--polish">O Mnie</span>
                                </>
                            )
                        }
                    }
                    )()}

                </h2>
            </div>
            <div className="about-me__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sed enim egestas auctor imperdiet nibh id. Et, odio ut tincidunt sit arcu sagittis condimentum. Adipiscing aliquam aliquam elementum aliquet magna velit non sit donec. Sed fermentum tincidunt nunc ut hac. Fusce laoreet odio enim ullamcorper sapien lacus mattis enim, mauris.
                    Sed vel nunc pharetra egestas leo. Habitasse arcu nam sagittis quis. Lacus cras egestas nisl ornare odio tortor donec ac duis. Sed justo morbi pellentesque dolor. Viverra euismod nec ultrices amet, id sit consequat amet sit. Enim interdum quam ut malesuada. Et fermentum convallis phasellus non, a pellentesque diam. Mi est egestas id cursus orci eu nulla fusce montes. Id maecenas duis ac tincidunt ut id.</p>
            </div>
        </section>
    );
}
export default AboutMe;