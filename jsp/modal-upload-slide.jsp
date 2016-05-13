<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div id="modal-upload-slide" class="modal">
    <div class="modal-content">
        <h5>上传课件</h5>
        <form enctype="multipart/form-data">
            <div class="row">
                <div class="input-field col s12">
                    <input id="slide-topic" type="text">
                    <label for="slide-topic">课件主题</label>
                </div>
            </div>
            <div class="row">
                <div class="file-field input-field col s12">
                    <div class="btn">
                        <span>点击选择附件</span>
                        <input id="slide-attach-file" type="file">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div class="modal-footer">
        <a class="modal-action modal-close waves-effect waves-light btn" onclick="upload_slide_to_server()">提交</a>
        <a class="modal-action modal-close btn-flat" href="#">取消</a>
    </div>
</div>
