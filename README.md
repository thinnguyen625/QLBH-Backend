# QLBH-Backend

- Mô hình MVC: 
    - Models: 
        - Chứa hết tất cả cả hàm xử lý liên quan đến đọc ghi db. 
        - models sẽ gọi file db và sử dụng các hàm đã được xây dựng, khai báo những câu truy vấn cần thiết
    - Routes: 
        - Tương tự như controller, chủ yếu khai báo các đường dẫn, tài nguyên
        - async - await => muốn gọi được lệnh await thì hàm đó phải trả ra 1 promise