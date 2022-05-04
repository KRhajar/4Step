-- An admin should have access to the app at first
-- create user  : email= admin, password=adminPass
INSERT IGNORE
INTO `app_user`(email, password, app_user_role, enabled, locked)
VALUES ('admin123@gmail.com', '$2a$10$Q1X5lxfBb.dkTtxa9WnoPuTxsr2USgVVLopFo3.9UFsoXMX6FKkku', 'ADMIN', 1, 0);