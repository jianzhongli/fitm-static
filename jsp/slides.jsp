<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row">
    <div class="col s12" id="slides">
        <c:if test="${user.isTeacher() || isAssitant}">
            <div class="row">
                <div class="col offset-l1">
                    <a class="waves-effect waves-light btn" onclick="open_upload_slide_modal()">上传课件 </a>
                </div>
            </div>
        </c:if>
        <table class="table highlight bordered">
            <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Topic</th>
                <th>Slides</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="slide" items="${slide_list}" varStatus="loop">
                <tr>
                    <td>${loop.index}</td>
                    <td>${slide.post_date}</td>
                    <td>${slide.topic}</td>
                    <td><a href="${slide.attach_file}"  target="_blank">点击下载</a></td>
                    <c:if test="${user.isTeacher() || isAssitant}">
                        <div class="row">
                            <div class="col offset-l1">
                                <a class="waves-effect waves-light btn" onclick="delete_slide()">删除</a>
                            </div>
                        </div>
                    </c:if>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>

<%@ include file="modal-upload-slide.jsp" %>