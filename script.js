$(document).ready(function() {  
    $('#registerForm').on('submit', function(e) {  
        e.preventDefault(); // 阻止表单默认提交行为  
  
        var username = $('#username').val().trim();  
        var email = $('#email').val().trim();  
        var password = $('#password').val().trim();  
  
        // 检查用户名是否至少包含5个字符  
        if (username.length < 5) {  
            alert('用户名必须至少包含5个字符');  
            return;  
        }  
  
        // 检查邮箱格式是否正确（简单示例）  
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
        if (!emailRegex.test(email)) {  
            alert('请输入有效的邮箱地址');  
            return;  
        }  
  
        // 检查密码是否至少包含8个字符  
        if (password.length < 8 ||!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {  
            alert('密码长度至少为8个字符，且必须包含大写字母、小写字母、数字和特殊字符！');  
            return;  
        }  
  
        // 如果所有检查都通过，则可以进行表单提交或其他操作  
        // 例如：$.ajax({...});  
  
        alert('注册成功！');  
    });  
});