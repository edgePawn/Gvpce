"use client";
import React from 'react';
import * as Form from '@radix-ui/react-form';
import './styles.css'; // Ensure this CSS file exists and is properly formatted
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="nav-nav">
      <div className="nav-nav2">
      <p>
        GVPCE
      </p>
        <Link href="/" passHref>
          <button className={pathname === '/' ? 'mr-4 text-blue-500' : 'mr-4'}>
          <p className="css-1t80c51">Home</p>
          </button>
        </Link>
        <Link href="/explore" passHref>
          <button className={pathname === '/explore' ? 'text-blue-500' : ''}>
          <p className="css-rj0dda">Explore</p>
          </button>
        </Link>
       
      </div>
      <div className="ab4ccn">
        <div className="hyjy6">
        <div className="s5">
        <svg className="css-sppnag" focusable="false" viewBox="0 0 13.002 13.001" data-testid="Search_SearchIcon"><g transform="translate(-1.012 -0.914)"><g transform="translate(1.012 0.914)"><path d="M0,1.207,1.17,0l3.7,3.592L3.7,4.8Z" transform="translate(8.135 8.202)" fill="currentColor"></path><path d="M0,5.7a5.7,5.7,0,0,1,11.4,0A5.83,5.83,0,0,1,9.69,9.734,5.607,5.607,0,0,1,5.7,11.4,5.707,5.707,0,0,1,0,5.7ZM2.681,2.718A4.235,4.235,0,0,0,1.4,5.757a4.3,4.3,0,0,0,8.593,0A4.435,4.435,0,0,0,8.7,2.718a4.193,4.193,0,0,0-3-1.252A4.25,4.25,0,0,0,2.681,2.718Z" fill="currentColor"></path></g></g></svg>
        </div>
      </div>
      <input placeholder="Search" id="search-input" data-testid="Search_Input"  className="css-3mqgs4" ></input>
      <div className="css-14eb9zo"><button data-testid="TopNavBar_SearchPalette" aria-label="Filter by color" className="css-1wsgyw" aria-expanded="false"><svg className="css-1g5mdqj" focusable="false" width="16" height="16" viewBox="0 0 16 16"><g><path d="M11.19,12.063a11.672,11.672,0,0,1-.1,1.638,2.859,2.859,0,0,1-2.9,2.3A7.919,7.919,0,0,1,.957,11.717,7.88,7.88,0,0,1,4.388.914,8.35,8.35,0,0,1,14.062,2.4a6.388,6.388,0,0,1,1.855,3.28,5.2,5.2,0,0,1,.057,1.464,1.806,1.806,0,0,1-1.8,1.587,6.86,6.86,0,0,0-1.316.082,2.125,2.125,0,0,0-1.685,2.049c-.014.4,0,.8,0,1.2h.022M3.943,8.38a1.444,1.444,0,1,0,1.44,1.439A1.446,1.446,0,0,0,3.943,8.38M7.57,11.29a1.442,1.442,0,0,0-1.452,1.429,1.45,1.45,0,1,0,2.9,0A1.436,1.436,0,0,0,7.57,11.29m3.622-5.474a1.45,1.45,0,0,0,.026-2.9,1.45,1.45,0,1,0-.026,2.9M5.013,5.475A1.442,1.442,0,0,0,3.577,4.01,1.46,1.46,0,0,0,2.122,5.443,1.444,1.444,0,0,0,3.544,6.9,1.426,1.426,0,0,0,5.013,5.475M7.2,4.718A1.425,1.425,0,0,0,8.647,3.289a1.444,1.444,0,0,0-1.44-1.462,1.46,1.46,0,0,0-1.45,1.46A1.441,1.441,0,0,0,7.2,4.718" transform="translate(0 -0.001)" fill="currentColor"></path></g></svg></button></div>
      </div>
     
<button type="button" className="css-1bby9dw" data-testid="TopNavBar_AddBtn"><span className="css-kk0bxe"><span className="css-1kxuhr3"><div className="css-1k21jys"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.69907 4H7.29907V12H8.69907V4Z" fill="currentColor"></path><path d="M12 8.65001V7.35001L4 7.35001V8.65001H12Z" fill="currentColor"></path></svg></div>Create</span></span></button>      <button data-testid="TopNavBar_NotificationsBtn" aria-label="Activity" className="css-5g654f"><svg className="css-1e2vr6l" focusable="false" viewBox="0 0 15 19"><path d="M11.548,1.2a.693.693,0,0,1,.287.063.744.744,0,0,1,.414.811L11.137,8.21h6.349a.712.712,0,0,1,.639.408.758.758,0,0,1-.067.773L10.423,19.9a.7.7,0,0,1-.859.233.744.744,0,0,1-.414-.811l1.114-6.136H3.914a.712.712,0,0,1-.639-.408.758.758,0,0,1,.067-.773L10.977,1.5A.707.707,0,0,1,11.548,1.2Zm4.509,8.485H10.276a.705.705,0,0,1-.55-.267.756.756,0,0,1-.152-.607l.708-3.9-4.939,6.8h5.781a.705.705,0,0,1,.55.267.756.756,0,0,1,.152.607l-.708,3.9Z" transform="translate(-3.2 -1.2)" fill="#fff"></path></svg><span data-testid="Notifications_GreenDot" className="css-1clbiqm"></span></button>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="css-1ub9xiv"><path d="M5 21V3H19V21L12 14.453L5 21Z" fill="currentColor"></path></svg>

      <svg className="css-185iwmr" focusable="false" viewBox="0 0 11 6.5"><path d="M5.377,0,6.5,1.149,2.247,5.5,6.5,9.851,5.377,11,0,5.5Z" transform="translate(0 6.5) rotate(-90)" fill="currentColor"></path></svg>
      <div className="css-9kakj6"><button className="css-ru9vss">For You</button><button data-testid="Home_FeaturedBtn" class="css-ru9vss">Featured</button><button data-testid="Home_FollowingBtn" className="css-1uako17">Following</button></div>
      <button data-testid="Home_FeaturedBtn" className="css-ru9vss">Featured</button>
      {/* <div className="form">
        <Form.Root className="FormRoot">
          <Form.Field className="FormField" name="email">
            <div className="InputWrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
                fill="none"
                className="SearchIcon"
              >
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              <Form.Control asChild>
                <input className="Input" type="email" required placeholder="Search" />
              </Form.Control>
            </div>
            <Form.Message className="FormMessage" match="valueMissing">
              Please Enter
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid Info
            </Form.Message>
          </Form.Field>
        </Form.Root>
      </div> */}
      {/* <div className="create">
        lol
      </div> */}
    </nav>
  );
};

export default Navbar;
