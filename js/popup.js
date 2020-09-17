$('#reset_course').on('click',
    function() {
        chrome.storage.sync.clear()
    }
)