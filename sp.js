document.addEventListener('DOMContentLoaded', ()=>{
    var keyword = 'do popup', body = document.getElementsByTagName('body')[0];
    document.querySelectorAll('[_action^="' + keyword + ' "]').forEach(e=>{
        e.onclick = ((_e, _ = null)=>{
            _e && (
                _e.style.overflowY = 'auto',
                _e.style.width = '100%',
                _e.style.padding = '20px 0 0 20px',
                _e.parentNode.removeChild(_e),
                _ = ()=>{
                    var popup = document.createElement('div'),
                        bg = document.createElement('div'),
                        close = document.createElement('button'),
                        body_start_state = body.style.overflow;
                    body.style.overflow = 'hidden';
                    popup.style.cssText = 'border:6px solid #d4d4d4;position:absolute;border-top-width:48px;background-color:white;z-index:100';
                    bg.style.cssText = 'background-color:rgba(0,0,0,.31);width:9999px;height:9999px;overflow:hidden;position:fixed;top:-4000px;left:-4000px;z-index:99';
                    close.style.cssText = 'font:400 20px Arial;background:#d4d4d4;position:absolute;cursor:pointer;right:4px;top:-37px;color:#000;width:2em;border:1px solid #000;padding:0;border-radius:0;z-index:1';
                    body.appendChild(bg);
                    body.appendChild(popup);
                    popup.appendChild(close);
                    _e.getAttribute('_popupTitle') && (
                        popup.appendChild((e=>{
                            var res = window.onresize || (()=>{});
                            e.innerHTML = _e.getAttribute('_popupTitle');
                            e.style.cssText = 'font-weight:700;font-size:22px;position:absolute;top:-38px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;left:20px';
                            function onr(){
                                if (window.innerWidth >= 760) e.style.maxWidth = `${(window.innerWidth * 0.6) - 85}px`; else e.style.maxWidth = `${window.innerWidth - 85}px`;
                            };
                            window.onresize = function(){
                                res.apply(arguments);
                                onr();
                            }
                            onr();
                            return e
                        })(document.createElement('div')))
                    );
                    close.innerHTML = 'x';
                    close.onclick = bg.onclick = ()=>{
                        bg.parentNode.removeChild(bg);
                        popup.parentNode.removeChild(popup);
                        body.style.overflow = body_start_state;
                    }
                    popup.appendChild(_e);
                    var res = window.onresize || (()=>{}), onr = ()=>{
                        if (window.innerWidth >= 760){
                            popup.style.maxHeight = `${window.innerHeight * 0.6}px`;
                            popup.style.top = `${window.innerHeight * 0.2}px`;
                            popup.style.left = `${window.innerWidth * 0.2}px`;
                            popup.style.width = `${window.innerWidth * 0.6}px`;
                            _e.style.maxHeight = `${(window.innerHeight * 0.6) - 94}px`;
                        } else {
                            popup.style.maxHeight = `${window.innerHeight}px`;
                            popup.style.top = popup.style.left = `0px`;
                            popup.style.width = `${window.innerWidth}px`;
                            _e.style.maxHeight = `${window.innerHeight - 94}px`;
                        }
                    };
                    window.onresize = function(){
                        res.apply(arguments);
                        onr();
                    }
                    onr();
                }
            ); return _
        })(document.querySelector('[_popup="' + e.getAttribute('_action').slice(keyword.length + 1) + '"]'))
    });
})