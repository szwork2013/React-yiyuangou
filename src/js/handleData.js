export default function handleData(url, callback) {

    $.ajax({
        url: url,
        dataType: "jsonp",
        callback: "__callback",
        success: function(res) {
            if(callback){

                callback(res);
            }
        }.bind(this)
    });
}
