document.addEventListener('livereloadUpdated', function (ev) {
    if (!ev.detail) return;
    if (!document.livereload_hash) {
        document.livereload_hash = ev.detail
        return
    }
    if (document.livereload_hash !== ev.detail) {
        console.log('Liverload: reloading')
        document.livereload_hash = ev.detail
        document.location.reload();
    }
})
document.addEventListener('DOMContentLoaded', function () {
    console.log('Liverload: code injected')
    window.setInterval(function () {
        const tag = document.getElementById('livereload_hash')
        let parent = null
        const newUrl = './livereload_hash.js?t=' + document.timeline.currentTime
        if (!tag) {
            parent = document.head
        } else {
            parent = tag.parentNode
            parent.removeChild(tag)
        }
        const newTag = document.createElement('script');
        newTag.src = newUrl;
        newTag.id = 'livereload_hash';
        parent.appendChild(newTag);
    }, 500)
});
//---
