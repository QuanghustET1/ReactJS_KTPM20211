import react from 'react';
import './HeroSection.scss';

const HeroSection = () => (
    <div>
        <section id="hero" class="d-flex align-items-center">
            <div class="container">
            <h1>Booking Clinic</h1>
            <h2>Nơi sức khỏe của bạn được nâng niu và chăm sóc cẩn thận</h2>
            <a href="#about" class="btn-get-started scrollto">Tìm bác sĩ ngay!</a>
            </div>
        </section>

        {/* Why us section */}
        <section id="why-us" class="why-us">
            <div class="container">
                <div class="row">
                <div class="col-lg-4 d-flex align-items-stretch">
                    <div class="content">
                    <h3>Tại sao bạn chọn Booking Clinic?</h3>
                    <p>
                        Phòng khám với đội ngũ y, bác sĩ có nhiều năm kinh nghiệm trong nghề. Bạn sẽ dễ dàng chọn lịch khám thích hợp với những bác sĩ tốt nhất!
                    </p>
                    <div class="text-center">
                        <a href="#" class="more-btn">Tìm hiểu thêm<i class="bx bx-chevron-right"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-8 d-flex align-items-stretch">
                    <div class="icon-boxes d-flex flex-column justify-content-center">
                    <div class="row">
                        <div class="col-xl-4 d-flex align-items-stretch">
                        <div class="icon-box mt-4 mt-xl-0">
                            <i class="fas fa-file-alt"></i>
                            <h4>Đặt lịch dễ dàng</h4>
                            <p>Với lịch khám của bác sĩ được hiển thị cụ thể, bạn sẽ dễ  dàng đặt lịch như mình mong muốn.</p>
                        </div>
                        </div>
                        <div class="col-xl-4 d-flex align-items-stretch">
                        <div class="icon-box mt-4 mt-xl-0">
                            <i class="fas fa-cube"></i> 
                            <h4>Dịch vụ tận tình</h4>
                            <p>Chúng tôi cam kết mang đến cho khách hàng những trải nghiệm tốt nhất tại phòng khám.</p>
                        </div>
                        </div>
                        <div class="col-xl-4 d-flex align-items-stretch">
                        <div class="icon-box mt-4 mt-xl-0">
                            <i class="far fa-images"></i>   
                            <h4>Khuyến mãi</h4>
                            <p>Những khách hàng khám lại sẽ được giảm 10% hóa đơn cùng những ưu đãi vô cùng hấp dẫn.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </section>
        {/* Count Section */}
        <section id="counts" class="counts">
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="count-box">
                    <i class="fas fa-user-md"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter">5</span>
                    <p>Bác sĩ</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                    <div class="count-box">
                    <i class="far fa-hospital"></i>
                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter">4</span>
                    <p>Chuyên khoa</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div class="count-box">
                    <i class="fas fa-flask"></i>
                    <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" class="purecounter">3</span>
                    <p>Đối tác</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div class="count-box">
                    <i class="fas fa-trophy"></i>
                    <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" class="purecounter">6</span>
                    <p>Giải thưởng</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
)

export default HeroSection;