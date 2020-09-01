import React from 'react';
import '../sass/components/About.scss';

const About = ({aboutLink, aboutTextLink}) => {

    return(
        <div className="about-content">
            <p>
                    We love sports, that’s what we like. Running without much effort to keep
                    your fitness up and of course your performance improves in the end.
                    Runaide helps you with that.
            </p>
            <p>
                    <b>Every time after a run you add the run.</b>
                    <br/>
                    In the Add run section you go through a short questionnaire with questions about your
                    lifestyle over the past 24 hours. By doing this you build a personal database in which
                    your performance is linked to your lifestyle habits (how much sleep did you have,
                    had you had alcohol, etc. etc.).
                    <br/>
                    <br/>
                    <b>Results insight into your conditions for a top performance</b>
                    <br/>
                    When you look under Results you will see what your conditions are for the best
                    sports performance. You can also see what, for example, your performance will be
                    if you have had two glasses of alcohol the night before.
                    <br/>
                    <br/>
                    What Runaide actually does is to provide insight into how you can best adjust
                    your lifestyle for a pleasant sports experience and better performance.
                    A digital coach that you use for a nice run.
            </p>
            <p>get<a href={aboutLink} >{aboutTextLink}</a></p>

        </div>
    );
}

export default About;