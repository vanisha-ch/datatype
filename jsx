<div id="app"></div>

    <!-- <script type="text/babel">
      const element = <h1 className="a">HELLO, JSX</h1>;

      const e = document.getElementById("app");
      const root = ReactDOM.createRoot(e);
      root.render(element);
    </script> -->
    <script>
      type="text/babel">
                  const App=()=>{
                     const isLoggedIn=false;
                    return(
                        <div>
                            {isLoggedIn ?(<h1>Welcome ,user!</h1>):(<h>please log in</h1>)}

                            {isLoggedIn &&(<h2> you have new notifications</h2>)}
                            </div>
                    );
                    };


                   const root =ReactDOM.createRoot(document.getElementById('app'))
                   root.render(<App/>)
    </script>
  </body>
