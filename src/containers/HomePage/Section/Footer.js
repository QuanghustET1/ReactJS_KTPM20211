import React, { Component } from 'react';
import './Footer.scss';
const Footer = () => (
    <div>
    <footer id="footer">

    <div class="footer-top">
    <div class="container">
        <div class="row">

        <div class="col-lg-4 col-md-6 footer-contact">
            <h3>Booking Clinic</h3>
            <p>
              Bạch Mai <br/>
              Hà Nội<br/>
              Việt Nam<br/><br/>
              <strong>Điện thoại:</strong> +84 38 873 3942<br/>
              <strong>Email:</strong> bookingclinic@email.com<br/>
            </p>
        </div>

        <div class="col-lg-4 col-md-6 footer-links">
            <h4>Đường dẫn</h4>
            <ul>
            <li><i class="fas fa-chevron-right"></i> <a href="/">Trang chủ</a></li>
            <li><i class="fas fa-chevron-right"></i> <a href="#">Về chúng tôi</a></li>
            <li><i class="fas fa-chevron-right"></i> <a href="#">Dịch vụ</a></li>
            </ul>
        </div>

        {/* <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
            <li><i class="fas fa-chevron-right"></i> <a href="#">Web Design</a></li>
            <li><i class="fas fa-chevron-right"></i> <a href="#">Web Development</a></li>
            <li><i class="fas fa-chevron-right"></i> <a href="#">Product Management</a></li>
            <li><i class="fas fa-chevron-right"></i> <a href="#">Marketing</a></li>
            <li><i class="fas fa-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
        </div> */}

        <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Nhận thông báo về khuyến mãi </h4>
            <p>Khuyến mãi sẽ gửi về email của quý khách hàng khi phòng khám có ưu đãi</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Nhận" />
            </form>
          </div>

        </div>
    </div>
    </div>

    {/* <div class="container d-md-flex py-4 lowest-footer">

    <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
        &copy; Copyright <strong><span>Medilab</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
        </div>
    </div>
    <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
        <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" class="google-plus"><i class="fab fa-skype"></i></a>
        <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
    </div>
    </div> */}
</footer>
</div>
)

export default Footer;