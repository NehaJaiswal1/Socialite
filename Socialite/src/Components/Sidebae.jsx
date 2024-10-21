import React from 'react';
import './Sidebar.css';
import feed from '../assets/images/home.png';
import message from '../assets/images/message.png';
import video from '../assets/images/video.png';
import event from '../assets/images/event.png';
import page from '../assets/images/page.png';
import group from '../assets/images/group.png';
import market from '../assets/images/market.png';
import blog from '../assets/images/blog.png';
import game from '../assets/images/game.png';
import fundraiser from '../assets/images/fund.png';
import blog2 from '../assets/images/blog-2.png';
import event2 from '../assets/images/event-2.png';
import group2 from '../assets/images/group-2.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="pr-4" data-simplebar="init">
        <div className="simplebar-wrapper">
          <div className="simplebar-content">
            <nav id="side">
              <ul >
                <li className="active">
                  <a href="feed.html">
                    <img src={feed} alt="feeds" className="icon-size" />
                    <span> Feed </span> 
                  </a>
                </li>
                <li >
                  <a href="messages.html">
                    <img src={message} alt="messages" className="icon-size" />
                    <span> Messages </span> 
                  </a>
                </li> 
                <li>
                  <a href="video.html">
                    <img src={video} alt="video" className="icon-size" />
                    <span> Video </span> 
                  </a>
                </li>
                <li>
                  <a href="event.html">
                    <img src={event} alt="event" className="icon-size" />
                    <span> Event </span> 
                  </a>
                </li>
                <li>
                  <a href="pages.html">
                    <img src={page} alt="pages" className="icon-size" />
                    <span> Pages </span> 
                  </a>
                </li>
                <li>
                  <a href="groups.html">
                    <img src={group} alt="groups" className="icon-size" />
                    <span> Groups </span> 
                  </a>
                </li>
                <li>
                  <a href="market.html">
                    <img src={market} alt="market" className="icon-size w-7" />
                    <span> Market </span> 
                  </a>
                </li>
                <li>
                  <a href="blog.html">
                    <img src={blog} alt="blog" className="icon-size" />
                    <span> Blog </span> 
                  </a>
                </li>

                {/* Hidden items */}
                <li className="!hidden" id="show__more">
                  <a href="games.html">
                    <img src={game} alt="games" className="icon-size" />
                    <span> Games </span> 
                  </a>
                </li>
                <li className="!hidden" id="show__more">
                  <a href="funding.html">
                    <img src={fundraiser} alt="fund" className="icon-size" />
                    <span> Fundraiser </span> 
                  </a>
                </li>

                {/* More items button */}
                <button
                  type="button"
                  className="flex items-center gap-4 py-2 px-4 w-full font-medium text-sm"
                  uk-toggle="target: #show__more; cls: !hidden uk-animation-fade"
                  aria-expanded="true"
                >
                  <svg className="bg-gray-200 rounded-full w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span id="show__more"> See More </span>
                  <span className="!hidden" id="show__more"> See Less </span>
                </button>
              </ul>

              <div className="font-medium text-sm border-t pt-3 mt-2">
                <div className="px-3 pb-2 text-sm font-medium"> 
                  <div>Shortcut</div> 
                </div>
                <a href="#">
                  <div className="flex items-center gap-2 p-3 px-4 rounded-xl hover:bg-secondery">
                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 rounded-full object-cover" />
                    <div> Marin Gray</div>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
