import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <header className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <polyline points="7 17 2 12 7 7"></polyline>
            <polyline points="12 17 7 12 12 7"></polyline>
            <path d="M22 18v-2a4 4 0 0 0-4-4H7"></path>
          </svg>
          <span className="sr-only">Reddit</span>
        </a>
        <div className="flex items-center gap-4">
          <input
            placeholder="Search"
            className="rounded-md px-3 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
            type="text"
          />
          <nav className="flex gap-4">
            <a className="hover:underline" href="#">
              Hot
            </a>
            <a className="hover:underline" href="#">
              New
            </a>
            <a className="hover:underline" href="#">
              Top
            </a>
            <a className="hover:underline" href="#">
              Rising
            </a>
          </nav>
        </div>
      </header>
      <main className="flex flex-1">
        <aside className="w-64 p-4 border-r border-gray-700">
          <h2 className="font-semibold mb-2">User Information</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
              <img
                className="aspect-square h-full w-full"
                alt="@shadcn"
                src="/placeholder-user.jpg"
              />
            </span>
            <div className="grid gap-0.5 text-xs">
              <div className="font-medium">John Doe</div>
              <div className="text-gray-400">u/johndoe</div>
            </div>
          </div>
          <h2 className="font-semibold mb-2">Subreddits</h2>
          <div className="grid gap-2">
            <a className="hover:underline" href="#">
              r/programming
            </a>
            <a className="hover:underline" href="#">
              r/javascript
            </a>
            <a className="hover:underline" href="#">
              r/reactjs
            </a>
            <a className="hover:underline" href="#">
              r/node
            </a>
          </div>
        </aside>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="grid gap-4">
            <div className="rounded-lg border p-4 border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex flex-col items-center gap-1">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </button>
                  <span className="text-xs">123</span>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Post Title</h3>
                  <p className="text-sm mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="text-xs text-gray-400">
                    Posted by u/johndoe 3 hours ago
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-2 border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex flex-col items-center gap-1">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m5 12 7-7 7 7"></path>
                        <path d="M12 19V5"></path>
                      </svg>
                    </button>
                    <span className="text-xs">12</span>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="text-xs text-gray-400">
                      Comment by u/johndoe 2 hours ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="w-64 p-4 border-l border-gray-700">
          <h2 className="font-semibold mb-2">Suggestions</h2>
          <div className="grid gap-2">
            <a className="hover:underline" href="#">
              r/python
            </a>
            <a className="hover:underline" href="#">
              r/css
            </a>
            <a className="hover:underline" href="#">
              r/angular
            </a>
            <a className="hover:underline" href="#">
              r/vuejs
            </a>
          </div>
        </aside>
      </main>
      <footer className="flex items-center justify-between px-4 py-2 border-t border-gray-700">
        <div className="text-sm text-gray-400">
          © 2024 Reddit. All rights reserved.
        </div>
        <nav className="flex gap-4">
          <a className="hover:underline" href="#">
            About
          </a>
          <a className="hover:underline" href="#">
            Help
          </a>
          <a className="hover:underline" href="#">
            Terms
          </a>
          <a className="hover:underline" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default page;
