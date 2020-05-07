
import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/App';
import logo from '~/assets/logo.png';
// import s from './'
function render(){
    return ReactDOM.render(
        <App>
            <section>
                <p>
                Hello,react + redux
                </p>
                <img src={logo} alt="logo"/>
            </section>
        </App>,
        document.getElementById("j-easylog")
    );
}
render();

if(module.hot){
    module.hot.accept(['~/components/App'],render);
    module.hot.accept(() => window.location.reload(true));
}