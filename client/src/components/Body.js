import React from 'react';
import image from './images/IMG_1220.jpg';

const Body = () => {

    return (
<div className="container">
<div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10" id="maincontent">
        <div className="row">
            <div className="col-md-12">
                <h2>About Me</h2>
            </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <img src={image} className="img-thumbnail pic" style={{height: "300px", width:"400px",}}></img>
                    <p className="description">My name is Elizabeth O'Leary. I am originally from Dubuque, Iowa. I
                        graduated college from Loyola University Chicago, and moved to St. Paul, MN after
                        graduation.
                        <br />
                        <br />
                        My First job was with the MN DNR. I worked across the state controlling for invasive
                        species like Garlic Mustard and Purple Loostrife. This was a "Summer Seasonal" position
                        and in order for the DNR to hire me back the following summer, I had to go on
                        unemployment for 3 months. I was not keen on that idea, as I was living on my own and my
                        student loans were coming due. So I applied for a teller position at Wells Fargo. Wells
                        ended up offering me a job as a personal banker which I took. When it came time to go
                        back to the DNR I had a decision to make. Do I want to continue working somewhere that
                        has to keep laying me off? OR do I want to work for a more stable company? (not to
                        mention air conditioning and inside bathrooms).
                        <br />
                        <br />
                        I decided to stay with Wells Fargo. I worked as a personal banker for one year, and then
                        moved into the mortgage business in 2006. Now, if you are thinking that that seems like
                        an ominous time to enter the mortgage industry, you are correct. The next year was the
                        start of the financial crisis. While one might think my job was in jeapardy, I have
                        actually never worked so hard in any job before or since then. I worked an average of
                        12-14 hour days, including weekends. What I really learned from all this was how to
                        manage stress, and work efficiently. Whenever I think something is tough or stressful, I
                        just think back to those days and ground myself.
                        <br />
                        <br />
                        Eventually it was time to move on and find a job where I could have more work life
                        balance. I met with the CEO of a small startup bank in Edina. I really liked what they
                        were doing, and the CEO really liked me. She called me and said "I have no idea what job
                        I have for you, but will you come work for me and we will figure it out?" Never being
                        one afraid to take a chance, I said sure, and went to work for MN Bank & Trust. Being a
                        small startup bank provided me the opportunity to dabble in personal banking, private
                        banking, wealth management, management, and operations. I was able to obtain my Series 7
                        and Series 66 and completed all the course work for a Certified Finanaical Planner.
                        <br />
                        <br />
                        While I enjoyed working in finance, and really did have a good sense for financial
                        strategies, there was one passion in my life that was missing. That being technology. I
                        got a call from a friend who worked in HR at Securian Financial. He said "I dont know
                        what you are doing right now, but this job came across my desk and I immediatly thought
                        of you." I took a look at the job and it was for Operations of a new department at
                        Securian, The Innovation Lab. I met with the head of the department, and once again was
                        faced with a similar proposition. "I have no idea what we will be working on, or for how
                        long, but do you want to work with us?" Well who could resist an offer like that? Not
                        me, so I took the job. For the past 3 years I have been working on the
                        business side of an app we parterned with Credit Unions to build. The app helps thier
                        members find and save money. In addition to this, I have had the opportunity to help with
                        a wearables experiment, where we compared wearable activity data to standard life
                        insurance underwriting to see if there were any similarities. I have also been learning
                        RPA by means of UiPath. We have begun to automate simple processes in
                        Retirement,Treasury Managaement, Group Insurance and Shared Services.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-1"></div>
</div>
)}

export default Body;
