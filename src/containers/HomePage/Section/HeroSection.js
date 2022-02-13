import react from 'react';
import './HeroSection.scss';

const HeroSection = () => (
    <div>
        <section id="hero" class="d-flex align-items-center">
            <div class="container">
            <h1>Welcome to Medilab</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
            </div>
        </section>

        {/* Why us section */}
        <section id="why-us" class="why-us">
            <div class="container">
                <div class="row">
                <div class="col-lg-4 d-flex align-items-stretch">
                    <div class="content">
                    <h3>Why Choose Medilab?</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                        Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                    </p>
                    <div class="text-center">
                        <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-8 d-flex align-items-stretch">
                    <div class="icon-boxes d-flex flex-column justify-content-center">
                    <div class="row">
                        <div class="col-xl-4 d-flex align-items-stretch">
                        <div class="icon-box mt-4 mt-xl-0">
                            <i class="fas fa-file-alt"></i>
                            <h4>Corporis voluptates sit</h4>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                        </div>
                        <div class="col-xl-4 d-flex align-items-stretch">
                        <div class="icon-box mt-4 mt-xl-0">
                            <i class="fas fa-cube"></i> 
                            <h4>Ullamco laboris ladore pan</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                        </div>
                        <div class="col-xl-4 d-flex align-items-stretch">
                        <div class="icon-box mt-4 mt-xl-0">
                            <i class="far fa-images"></i>   
                            <h4>Labore consequatur</h4>
                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
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
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter">10</span>
                    <p>Doctors</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                    <div class="count-box">
                    <i class="far fa-hospital"></i>
                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter">20</span>
                    <p>Departments</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div class="count-box">
                    <i class="fas fa-flask"></i>
                    <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" class="purecounter">15</span>
                    <p>Research Labs</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div class="count-box">
                    <i class="fas fa-trophy"></i>
                    <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" class="purecounter">14</span>
                    <p>Awards</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
)

export default HeroSection;