/*! scripts/tumblelog_post_message_queue.js */
(function(a){if(a.postMessageQueue){return}a.postMessageQueue=[];a.postMessageCallback=function(b){a.postMessageQueue.push(b.data)};if(window.addEventListener){window.addEventListener("message",a.postMessageCallback)}else{window.attachEvent("onmessage",a.postMessageCallback)}})(window.Tumblr||(window.Tumblr={}));