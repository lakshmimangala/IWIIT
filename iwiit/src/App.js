import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
  {/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/}
  <title>Indian Women in Information Technology</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=no"
  />
  <link rel="shortcut icon" href="/images/iwiit_7Hs_icon.ico" />
  <link rel="stylesheet" href="assets/css/main.css" />
  <noscript>
    &lt;link rel="stylesheet" href="assets/css/noscript.css" /&gt;
  </noscript>
  {/* Sidebar */}
  <section id="sidebar">
    <div className="inner">
      <nav>
        <ul>
          <li>
            <a href="#intro">Welcome</a>
          </li>
          <li>
            <a href="#one">Who we are</a>
          </li>
          <li>
            <a href="#two">What we do</a>
          </li>
          <li>
            <a href="#three">Get in touch</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  {/* Wrapper */}
  <div id="wrapper">
    {/* Intro */}
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1>Indian Women in Information Technology</h1>
        <p>
          A warm welcome to all Indian Women in Germany, who chosen career in
          Information Technology, Computer Science and Software Industry <br />
        </p>
      </div>
    </section>
    {/* One */}
    <section id="one" className="wrapper style2 spotlights">
      <section>
        <a href="#" className="image">
          <img src="images/iwiit-logo.png" height="100%" width="100%" data-position="center center" />
        </a>
        <div className="content">
          <div className="inner">
            <h2>IWIIT</h2>
            <p>
              We will provide End-to-End Procedure and Solutions to job seekers
              in Information Technology.
            </p>
            <h3>
              Target Audience: <br />
              Women/Students
            </h3>
            <ul className="actions">
              with work experience, looking to get employed planning to continue
              their career after break planning to choose their career in IT
              industry looking to keep up to date on technological advancements
              seeking help with Job opportunities and Referrals who want to
              attend meetups and conferences
            </ul>
          </div>
        </div>
      </section>
    </section>
    {/* Two */}
    <section id="two" className="wrapper style3 fade-up">
      <div className="inner">
        <h2>What we do</h2>
        <p>
          Providing help and guidance on below topics to get job easily and
          quickly.
        </p>
        <div className="features">
          <section>
            <span className="icon solid major fa-file" />
            <h3>CV or Profile Preparation guidance</h3>
            <p>
              Fine Tune your resume and cover letter according to European
              standards <br />
              Ex: Picture, address, work achievements instead of details of work
              ( don’t mention client details and project description in
              Germany).
            </p>
          </section>
          <section>
            <span className="icon solid major fa-lock" />
            <h3>Job Portals</h3>
            <p>
              Tricks and tips to follow on job portals. <br />
              Ex: Update your location on linkedin and other settings.
              Introduction to job portals like talent.io, honeypot.io where
              company HR contacts you directly.
            </p>
          </section>
          <section>
            <span className="icon solid major fa-desktop" />
            <h3>Simple and Basic Tutorials</h3>
            <p>
              Organizing all existing Tutorials websites, videos, blogs and etc
              at one place. <br />
              Organizing small workshops for latest technologies with real world
              examples Ex: 1-2 hours videos or podcasts, simple directions to
              understand.
            </p>
          </section>
          <section>
            <span className="icon solid major fa-inbox" />
            <h3>Product/Project practices</h3>
            <p>
              More info about product/project practices including Design
              Thinking, CI/CD, Cloud technologies etc. <br />
              Ex: Tutorial on agile methodologies like scrum, SAFe, XP, kanban,
              jira, confluence, jenkins, kubernetes, Docker etc.
            </p>
          </section>
          <section>
            <span className="icon solid major fa-info" />
            <h3>Visa related</h3>
            <p>
              Employment Visa, Change of Employer Visa, JSV to Employment, EU
              Blue Card related info.
              <br />
              Ex: everyone knows and it is general information.
            </p>
          </section>
          <section>
            <span className="icon solid major fa-user-plus" />
            <h3>Work Environment Barriers</h3>
            <p>
              More about thinking pattern like until what extent you need to
              consider things at work environment or counselling.
              <br />
              Ex: Initial support once you joined in work by mentoring you in
              your work environment, if you need mentorship.
            </p>
          </section>
        </div>
      </div>
    </section>
    {/* Three */}
    <section id="three" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Get in touch</h2>
        <p>
          Join in our slack workspace by{" "}
          <a
            target="_blank"
            href="https://communityinviter.com/apps/iwiit/iwiit"
          >
            click
          </a>{" "}
          .
        </p>
        <div className="style1">
          <section>
            <ul className="contact">
              <li>
                <h3>Social</h3>
                <ul className="icons">
                  <li>
                    <a
                      href="https://www.facebook.com/groups/434482794088303/?ref=bookmarks"
                      className="icon brands fa-facebook-f"
                    >
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://communityinviter.com/apps/iwiit/iwiit"
                      className="icon brands fa-slack"
                    >
                      <span className="label">Slack</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/search?q=iwiit"
                      className="icon brands fa-github"
                    >
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/iwiit"
                      className="icon brands fa-gitlab"
                    >
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </div>
  {/* Footer */}
  <footer id="footer" className="wrapper style1-alt">
    <div className="inner">
      <ul className="menu">
        <li>© Indian Women in Information Technology. All rights reserved.</li>
      </ul>
    </div>
  </footer>
  {/* Scripts */}
</div>;

    </div>
  );
}

export default App;
