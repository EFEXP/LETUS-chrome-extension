chrome.runtime.onMessage.addListener(
    function(message, sender, callback) {
        console.info(message)
      if (message.type === "notsubmitted"&&$('.submissionstatusdraft').length>0) {
        alert("まだ提出は完了していません！！")
      } 
      return true 
    }
    
  );

const closeurl = chrome.extension.getURL("close-thick.png")
$('.r0').addClass("course_column")
$('.r1').addClass("course_column")

chrome.storage.sync.get(function (result) {
    console.info(result)
    $('div.block_course_list li.course_column').each(function (index) {
        const column = $(this)
        const name = column.find("a").attr('href').match("id=(.*?)(&|$)")[0].replace("id=", "")
        if (result.dismiss_content.indexOf(name) >= 0) {
            column.hide()
        }

    })
});

$('div.block_course_list li.course_column').each(function (index) {
    const column = $(this)
    column.append('<img class="dismiss_button"></img>')
    column.find(".dismiss_button").on('click',
        function () {
            const name = column.find("a").attr('href').match("id=(.*?)(&|$)")[0].replace("id=", "")
            chrome.storage.sync.get(function (result) {
                let c = result.dismiss_content
                if (!c) {
                    c = []
                }
                c.push(name)
                chrome.storage.sync.set({
                    dismiss_content: c
                }, function () {
                    column.hide()
                });

            });



        }
    )
});



$('.dismiss_button').each(
    function () {
        $(this).attr('src', closeurl)
    }
)