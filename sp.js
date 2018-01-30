document.addEventListener('DOMContentLoaded', ()=>{
    var keyword = 'do popup', body = document.getElementsByTagName('body')[0];
    document.querySelectorAll('[_action^="' + keyword + ' "]').forEach(e=>{
        e.onclick = ((_e, _ = null)=>{
            _e && (
                _e.style.overflowY = 'auto',
                _e.style.width = '100%',
                _e.parentNode.removeChild(_e),
                _ = ()=>{
                    var popup = document.createElement('div'),
                        bg = document.createElement('div'),
                        close = document.createElement('button');
                    popup.style.cssText = 'border:6px solid #d4d4d4;padding:20px;position:absolute;border-top-width:48px;background-color:white;z-index:100';
                    bg.style.cssText = 'background-color:rgba(0,0,0,.31);width:9999px;height:9999px;overflow:hidden;position:fixed;top:-4000px;left:-4000px;z-index:99';
                    close.style.cssText = 'font:400 20px Arial;background:#d4d4d4;position:absolute;cursor:pointer;right:4px;top:-37px;color:#000;width:2em;border:1px solid #000;padding:0;border-radius:0';
                    body.appendChild(bg);
                    body.appendChild(popup);
                    popup.appendChild(close);
                    _e.getAttribute('_popupTitle') && (
                        popup.appendChild((e=>{
                            var res = window.onresize || (()=>{});
                            e.innerHTML = _e.getAttribute('_popupTitle');
                            e.style.cssText = 'font-weight:700;font-size:22px;position:absolute;top:-38px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis';
                            function onr(){
                                if (window.innerWidth >= 760) e.style.maxWidth = (window.innerWidth * 0.6) - 77; else e.style.maxWidth = window.innerWidth - 77;
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
                    }
                    popup.appendChild(_e);
                    var res = window.onresize || (()=>{}), onr = ()=>{
                        if (window.innerWidth >= 760){
                            popup.style.maxHeight = window.innerHeight * 0.6;
                            popup.style.top = window.innerHeight * 0.2;
                            popup.style.left = window.innerWidth * 0.2;
                            popup.style.width = (window.innerWidth * 0.6) - 12;
                            _e.style.maxHeight = (window.innerHeight * 0.6) - 94;
                        } else {
                            popup.style.maxHeight = window.innerHeight;
                            popup.style.top = popup.style.left = 0;
                            popup.style.width = window.innerWidth  - 52;
                            _e.style.maxHeight = window.innerHeight - 94;
                        }
                        console.log({
                            "popup.style.maxHeight": popup.style.maxHeight,
                            "popup.style.top": popup.style.top,
                            "popup.style.left": popup.style.left,
                            "popup.style.width": popup.style.width,
                            "_e.style.maxHeight": _e.style.maxHeight,
                        });
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