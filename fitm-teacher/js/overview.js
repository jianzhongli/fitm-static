$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});

function add_memo() {
	$('#memo_modal').openModal();
	$('#memo_text').val("");
	$('#memo_save').attr('onclick', 'save_new_memo()');
}

function save_new_memo() {
	var memo_text = $('#memo_text').val();
	if(memo_text != "")	{
		var list = $('#memo_ul>li:first-child');
		var new_memo_li = document.createElement('li');
		//new_memo_li.attr('class', 'collection-item');
		new_memo_li.setAttribute('class', 'collection-item');
		new_memo_li.innerHTML = "<div><span>" + memo_text + "</span><a onclick=\"memo_more(this)\"; class=\"secondary-content waves-effect waves-light\"><i class=\"material-icons\">keyboard_arrow_right</i></a></div>";
		list.after(new_memo_li);
	}
}

function memo_more(memo_li) {
	$('#memo_text').val(memo_li.parentNode.children[0].innerText)
	$('#memo_modal').openModal();
	var memo_delete = $('#memo_delete');
	memo_delete.click(function () {
		memo_li.parentNode.parentNode.setAttribute("class", "hide");
		$('#memo_modal').closeModal();
	});
	var memo_save = $('#memo_save');
	memo_save.click(function() {
		memo_li.parentNode.children[0].innerText = $('#memo_text').val();
	});
}
