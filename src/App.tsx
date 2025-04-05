import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* 헤더 */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">피스트 트라이브</div>
            <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <ul>
                <li><a href="#instructors">강사진 소개</a></li>
                <li><a href="#equipment">장비 안내</a></li>
                <li><a href="#classes">수업 안내</a></li>
                <li><a href="#curriculum">커리큘럼</a></li>
                <li><a href="#pricing">이용 요금</a></li>
                <li><a href="#community">커뮤니티</a></li>
              </ul>
              <button className="btn-primary">수업 예약하기</button>
            </nav>
            <div 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 비주얼 */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>전문 강사진과 함께하는 실내 스키의 새로운 패러다임</h1>
          <p>아시아 최대 규모의 실내 스키장에서 전문 강사진과 함께하는 차별화된 스키 체험</p>
          <div className="hero-buttons">
            <button className="btn-primary">수업 예약하기</button>
            <button className="btn-secondary">자세히 알아보기</button>
          </div>
        </div>
        <div className="scroll-down">
          <span>스크롤 다운</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* 강사진 소개 */}
      <section className="section" id="instructors">
        <div className="container">
          <h2 className="section-title">전문 강사진 소개</h2>
          <p className="section-subtitle">피스트 트라이브의 강사진은 다양한 경력과 전문 자격증을 보유한 국내 최고의 스키 전문가들입니다.</p>
          
          <div className="instructors-grid">
            {/* 강사 1 */}
            <div className="instructor-card">
              <div className="instructor-image">
                <div style={{ backgroundColor: 'var(--primary-light)', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '2rem' }}>강사 1</div>
              </div>
              <div className="instructor-info">
                <h3>김민준</h3>
                <p className="position">수석 강사</p>
                <ul className="instructor-details">
                  <li><strong>경력:</strong> 15년 스키 강사 경력</li>
                  <li><strong>자격증:</strong> KSIA 레벨 3, 국제스키교사연맹(ISIA) 자격증</li>
                  <li><strong>전문분야:</strong> 초급/중급 스키 기술, 자세 교정</li>
                </ul>
                <div className="social-links">
                  <a href="https://instagram.com" className="social-link">인스타그램</a>
                  <a href="https://facebook.com" className="social-link">페이스북</a>
                </div>
              </div>
            </div>
            
            {/* 강사 2 */}
            <div className="instructor-card">
              <div className="instructor-image">
                <div style={{ backgroundColor: 'var(--primary-light)', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '2rem' }}>강사 2</div>
              </div>
              <div className="instructor-info">
                <h3>이서연</h3>
                <p className="position">전문 강사</p>
                <ul className="instructor-details">
                  <li><strong>경력:</strong> 12년 스키 강사 경력</li>
                  <li><strong>자격증:</strong> KSIA 레벨 3, PSIA 자격증</li>
                  <li><strong>전문분야:</strong> 중급/고급 기술, 카빙 턴 전문</li>
                </ul>
                <div className="social-links">
                  <a href="https://instagram.com" className="social-link">인스타그램</a>
                  <a href="https://youtube.com" className="social-link">유튜브</a>
                </div>
              </div>
            </div>
            
            {/* 강사 3 */}
            <div className="instructor-card">
              <div className="instructor-image">
                <div style={{ backgroundColor: 'var(--primary-light)', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '2rem' }}>강사 3</div>
              </div>
              <div className="instructor-info">
                <h3>박준호</h3>
                <p className="position">전문 강사</p>
                <ul className="instructor-details">
                  <li><strong>경력:</strong> 10년 스키 강사 경력</li>
                  <li><strong>자격증:</strong> KSIA 레벨 2, 응급 처치 자격증</li>
                  <li><strong>전문분야:</strong> 어린이 스키 교육, 안전 교육</li>
                </ul>
                <div className="social-links">
                  <a href="https://instagram.com" className="social-link">인스타그램</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 장비 안내 */}
      <section className="section bg-light" id="equipment">
        <div className="container">
          <h2 className="section-title">최첨단 장비 안내</h2>
          <p className="section-subtitle">아시아 최대 규모의 실내 스키장으로, 최첨단 시뮬레이터와 장비를 통해 최상의 스키 경험을 제공합니다.</p>
          
          <div className="equipment-items">
            <div className="equipment-item">
              <div className="equipment-image">
                <div style={{ backgroundColor: 'var(--primary-light)', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1.5rem' }}>스키 시뮬레이터</div>
              </div>
              <div className="equipment-info">
                <h3>7m 광폭 실내 스키 시뮬레이터</h3>
                <p>아시아 최대 규모의 7m 광폭 실내 스키 시뮬레이터로, 실제 슬로프와 유사한 환경에서 안전하게 스키를 배울 수 있습니다.</p>
                <ul className="equipment-features">
                  <li>실제 슬로프와 유사한 경사각 조절 가능</li>
                  <li>7m 너비의 넓은 스키 슬로프 제공</li>
                  <li>초보자부터 상급자까지 맞춤형 설정 가능</li>
                  <li>안전한 환경에서 스키 기술 연습 가능</li>
                </ul>
              </div>
            </div>
            
            <div className="equipment-item">
              <div className="equipment-info">
                <h3>최신형 스키 장비</h3>
                <p>초보자부터 상급자까지 모든 레벨에 맞는 최신형 스키 장비를 구비하여 최상의 스키 경험을 제공합니다.</p>
                <ul className="equipment-features">
                  <li>다양한 사이즈와 종류의 스키 및 스노우보드</li>
                  <li>초급부터 고급까지 다양한 수준의 장비 보유</li>
                  <li>정기적인 장비 점검 및 유지보수</li>
                  <li>개인 체형과 기술 수준에 맞는 맞춤형 장비 제공</li>
                </ul>
              </div>
              <div className="equipment-image">
                <div style={{ backgroundColor: 'var(--primary-light)', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1.5rem' }}>최신형 스키 장비</div>
              </div>
            </div>
            
            <div className="equipment-item">
              <div className="equipment-image">
                <div style={{ backgroundColor: 'var(--primary-light)', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1.5rem' }}>영상 분석 시스템</div>
              </div>
              <div className="equipment-info">
                <h3>영상 분석 시스템</h3>
                <p>첨단 영상 분석 시스템을 통해 수강생의 자세와 기술을 실시간으로 분석하고 피드백을 제공합니다.</p>
                <ul className="equipment-features">
                  <li>고속 카메라로 세밀한 동작 포착</li>
                  <li>실시간 자세 분석 및 교정 가이드</li>
                  <li>영상 기록을 통한 진전 과정 추적</li>
                  <li>전문 강사의 디테일한 피드백 제공</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 수업 안내 */}
      <section className="section" id="classes">
        <div className="container">
          <h2 className="section-title">수업 안내</h2>
          <p className="section-subtitle">피스트 트라이브는 모든 연령과 레벨에 맞는 다양한 수업을 제공합니다.</p>
          
          <div className="classes-grid">
            <div className="class-card">
              <div className="class-icon">🔰</div>
              <h3>기초 스키 클래스</h3>
              <p>스키를 처음 접하는 초보자를 위한 기초 클래스입니다. 기본 자세부터 턴의 기초까지 차근차근 학습합니다.</p>
              <ul className="class-info">
                <li><strong>레벨:</strong> 초급 (입문자)</li>
                <li><strong>수업 시간:</strong> 60분</li>
              </ul>
            </div>
            
            <div className="class-card">
              <div className="class-icon">🏂</div>
              <h3>중급 스키 클래스</h3>
              <p>기초 동작을 익힌 스키어를 위한 중급 클래스입니다. 다양한 턴 기술과 스피드 컨트롤을 향상시킵니다.</p>
              <ul className="class-info">
                <li><strong>레벨:</strong> 중급</li>
                <li><strong>수업 시간:</strong> 90분</li>
              </ul>
            </div>
            
            <div className="class-card">
              <div className="class-icon">🎿</div>
              <h3>고급 스키 클래스</h3>
              <p>중급 이상의 스키어를 위한 고급 클래스입니다. 심화된 턴 기술과 슬로프 적응력을 향상시킵니다.</p>
              <ul className="class-info">
                <li><strong>레벨:</strong> 고급</li>
                <li><strong>수업 시간:</strong> 90분</li>
              </ul>
            </div>
            
            <div className="class-card">
              <div className="class-icon">👶</div>
              <h3>어린이 스키 클래스</h3>
              <p>4세부터 12세까지 어린이를 위한 특별 클래스입니다. 재미있는 활동을 통해 스키의 기초를 익힙니다.</p>
              <ul className="class-info">
                <li><strong>레벨:</strong> 어린이 (4-12세)</li>
                <li><strong>수업 시간:</strong> 45분</li>
              </ul>
            </div>
          </div>
          
          <div className="class-schedule">
            <h3>수업 시간표</h3>
            <div className="schedule-table">
              <div className="schedule-header">
                <div>요일</div>
                <div>초급</div>
                <div>중급</div>
                <div>고급</div>
                <div>어린이</div>
              </div>
              <div className="schedule-row">
                <div>월-금</div>
                <div>10:00, 14:00, 18:00</div>
                <div>11:30, 15:30, 19:30</div>
                <div>13:00, 17:00</div>
                <div>16:00 (월, 수, 금)</div>
              </div>
              <div className="schedule-row">
                <div>토-일</div>
                <div>09:00, 12:00, 15:00, 18:00</div>
                <div>10:30, 13:30, 16:30, 19:30</div>
                <div>12:00, 15:00, 18:00</div>
                <div>10:00, 14:00</div>
              </div>
            </div>
            
            <div className="class-cta">
              <button className="btn-primary">수업 예약하기</button>
            </div>
          </div>
        </div>
      </section>

      {/* 이용 요금 정보 */}
      <section className="section bg-light" id="pricing">
        <div className="container">
          <h2 className="section-title">이용 요금 안내</h2>
          <p className="section-subtitle">합리적인 가격으로 최고의 스키 경험을 제공합니다.</p>
          
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>1회 체험</h3>
                <div className="price">₩50,000</div>
              </div>
              <ul className="pricing-features">
                <li>전문 강사 1:1 지도</li>
                <li>기본 장비 대여 포함</li>
                <li>안전 교육 포함</li>
                <li>수업 후 영상 분석 제공</li>
                <li>1시간 자유 연습 가능</li>
              </ul>
              <button className="btn-primary">예약하기</button>
            </div>
            
            <div className="pricing-card featured">
              <div className="pricing-tag">인기</div>
              <div className="pricing-header">
                <h3>4회 패키지</h3>
                <div className="price">₩180,000</div>
                <div className="price-desc">1회당 ₩45,000</div>
              </div>
              <ul className="pricing-features">
                <li>전문 강사 1:1 지도</li>
                <li>기본 장비 대여 포함</li>
                <li>안전 교육 포함</li>
                <li>수업 후 영상 분석 제공</li>
                <li>회차별 1시간 자유 연습 가능</li>
                <li>개인별 맞춤 커리큘럼</li>
              </ul>
              <button className="btn-primary">예약하기</button>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>8회 패키지</h3>
                <div className="price">₩320,000</div>
                <div className="price-desc">1회당 ₩40,000</div>
              </div>
              <ul className="pricing-features">
                <li>전문 강사 1:1 지도</li>
                <li>프리미엄 장비 대여 포함</li>
                <li>안전 교육 포함</li>
                <li>수업 후 영상 분석 제공</li>
                <li>회차별 2시간 자유 연습 가능</li>
                <li>개인별 맞춤 커리큘럼</li>
                <li>추가 레슨 10% 할인</li>
              </ul>
              <button className="btn-primary">예약하기</button>
            </div>
          </div>
          
          <div className="pricing-note">
            <p>* 단체 수업 및 특별 프로그램 요금은 별도 문의 바랍니다.</p>
            <p>* 장비 대여는 기본 장비(스키, 부츠, 폴)만 포함되며, 특수 장비는 별도 대여가 필요합니다.</p>
          </div>
        </div>
      </section>

      {/* 커뮤니티 */}
      <section className="section" id="community">
        <div className="container">
          <h2 className="section-title">커뮤니티</h2>
          <p className="section-subtitle">피스트 트라이브의 다양한 활동과 회원들의 생생한 후기를 확인하세요.</p>
          
          <div className="testimonials">
            <h3 className="subsection-title">고객 후기</h3>
            <div className="testimonial-slider">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"처음 스키를 접했는데, 친절한 강사님 덕분에 단 3회만에 기본 슬로프를 내려올 수 있게 되었어요. 실내에서 안전하게 배울 수 있어 좋았습니다."</p>
                </div>
                <div className="testimonial-author">
                  <div style={{ backgroundColor: 'var(--primary-light)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1rem' }}>김</div>
                  <div className="author-info">
                    <h4>김지은</h4>
                    <p>초급 클래스 수강생</p>
                    <div className="rating">★★★★★</div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"중급 과정을 통해 턴 기술이 크게 향상되었습니다. 영상 분석 시스템으로 자세 교정을 받을 수 있어 매우 효과적이었어요."</p>
                </div>
                <div className="testimonial-author">
                  <div style={{ backgroundColor: 'var(--primary-light)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1rem' }}>박</div>
                  <div className="author-info">
                    <h4>박민수</h4>
                    <p>중급 클래스 수강생</p>
                    <div className="rating">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="instagram-feed">
            <h3 className="subsection-title">SNS 둘러보기</h3>
            <div className="instagram-grid">
              <div className="instagram-item">
                <div style={{ backgroundColor: 'var(--primary-light)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1rem' }}>인스타 1</div>
              </div>
              <div className="instagram-item">
                <div style={{ backgroundColor: 'var(--primary-light)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1rem' }}>인스타 2</div>
              </div>
              <div className="instagram-item">
                <div style={{ backgroundColor: 'var(--primary-light)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1rem' }}>인스타 3</div>
              </div>
              <div className="instagram-item">
                <div style={{ backgroundColor: 'var(--primary-light)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1rem' }}>인스타 4</div>
              </div>
              <div className="instagram-item">
                <div style={{ backgroundColor: 'var(--primary-light)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1rem' }}>인스타 5</div>
              </div>
              <div className="instagram-item">
                <div style={{ backgroundColor: 'var(--primary-light)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1rem' }}>인스타 6</div>
              </div>
            </div>
            <a href="https://instagram.com/piestetribe" className="instagram-link">인스타그램에서 더 보기 @piestetribe</a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo">피스트 트라이브</div>
              <p>아시아 최대 규모의 실내 스키장에서 전문 강사진과 함께하는 차별화된 스키 체험을 제공합니다.</p>
            </div>
            
            <div className="footer-links">
              <h4>바로가기</h4>
              <ul>
                <li><a href="#instructors">강사진 소개</a></li>
                <li><a href="#equipment">장비 안내</a></li>
                <li><a href="#classes">수업 안내</a></li>
                <li><a href="#curriculum">커리큘럼</a></li>
                <li><a href="#pricing">이용 요금</a></li>
                <li><a href="#community">커뮤니티</a></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>연락처</h4>
              <p>주소: 강원도 평창군 대관령면 올림픽로 123</p>
              <p>전화: 033-123-4567</p>
              <p>이메일: info@piestetribe.com</p>
              <div className="social-icons">
                <a href="https://instagram.com" className="social-icon">인스타그램</a>
                <a href="https://facebook.com" className="social-icon">페이스북</a>
                <a href="https://youtube.com" className="social-icon">유튜브</a>
              </div>
            </div>
            
            <div className="footer-newsletter">
              <h4>뉴스레터 구독</h4>
              <p>최신 소식과 이벤트 정보를 받아보세요.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="이메일 주소 입력" required />
                <button type="submit">구독</button>
              </form>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2023 피스트 트라이브. All Rights Reserved.</p>
            <div className="footer-policies">
              <a href="/terms">이용약관</a>
              <a href="/privacy">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
