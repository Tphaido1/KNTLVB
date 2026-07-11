const slides = [
  {
    title: '1. Giới thiệu, khái niệm CV, vai trò, cấu trúc CV',
    tag: 'Slide 1',
    content: `
      <div class="presenter-slide-content">
        <h2>1. Giới thiệu, khái niệm CV, vai trò, cấu trúc CV</h2>
      </div>
    `
  },
  {
    title: '2. Mục tiêu nghề nghiệp',
    tag: 'Slide 2',
    content: `
      <div class="presenter-slide-content">
        <h2>2. Mục tiêu nghề nghiệp </h2>
      </div>
    `
  },
  {
    title: '3. Kinh nghiệm làm việc',
    tag: 'Slide 3',
    content: `
      <div class="presenter-slide-content">
        <h2>3. Kinh nghiệm làm việc</h2>
      </div>
    `
  },
  {
    title: '4. Trình độ học vấn, bằng cấp',
    tag: 'Slide 4',
    content: `
      <div class="presenter-slide-content">
        <h2>4. Trình độ học vấn</h2>
        <h3 style="color: #0070cc; margin-top: 20px;">Bằng cấp & Chứng chỉ</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; font-size: 0.95rem;">
          <div>
            <p>✔ Tên trường</p>
            <p>✔ Chuyên ngành</p>
            <p>✔ Thời gian học</p>
            <p>✔ GPA / Xếp loại</p>
          </div>
          <div>
            <p>✔ TOEIC / IELTS</p>
            <p>✔ MOS</p>
            <p>✔ Chứng chỉ chuyên môn</p>
            <p>✔ Khóa học liên quan</p>
          </div>
        </div>

        <div style="margin-top: 30px; background: #f0f6ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0052a3;">
          <h4 style="color: #0052a3; margin-top: 0;">📚 Vai trò của trình độ học vấn 🎓</h4>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Thể hiện nền tảng kiến thức chuyên môn.</li>
            <li>Giúp đánh giá mức độ phù hợp với vị trí ứng tuyển.</li>
            <li>Quan trọng đối với sinh viên và người mới tốt nghiệp.</li>
          </ul>
        </div>

        <div style="margin-top: 20px; background: #f0f6ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0052a3;">
          <h4 style="color: #0052a3; margin-top: 0;">🏆 Vai trò của bằng cấp & chứng chỉ 🏅</h4>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Chứng minh kỹ năng và năng lực.</li>
            <li>Thể hiện tinh thần học hỏi.</li>
            <li>Tăng lợi thế cạnh tranh khi ứng tuyển.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: '5. Ví dụ minh họa',
    tag: 'Slide 5',
    content: `
      <div class="presenter-slide-content">
        <h2> Ảnh minh họa CV</h2>
        <div style="display: flex; justify-content: center; margin-top: 24px;">
          <img src="Image/ChatGPT%20Image%2001_06_25%2012%20thg%207,%202026.png" alt="Hình ảnh minh họa CV" style="max-width: 100%; max-height: 460px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);" />
        </div>
        <p style="text-align: center; margin-top: 18px; color: #4a5f7f; font-size: 1rem;">Hình ảnh minh họa giúp người xem hình dung rõ hơn về bố cục trình bày của CV.</p>
      </div>
    `
  },
  {
    title: '5. Kỹ năng trong CV',
    tag: 'Slide 5',
    content: `
      <div class="presenter-slide-content">
        <h2>5. Kỹ năng trong CV</h2>
      </div>
    `
  },
  {
    title: '6.1. Phần thông tin cá nhân',
    tag: 'Slide 6',
    content: `
      <div class="presenter-slide-content">
        <h2>6.1. Phần thông tin cá nhân</h2>
        <div style="margin-top: 20px; display: grid; gap: 12px; font-size: 0.95rem;">
          <div style="background: #f0f6ff; padding: 14px; border-radius: 10px; border-left: 4px solid #0052a3;">
            <p>✔ Trình bày đầy đủ thông tin cá nhân.</p>
            <p>✔ Có ảnh chân dung chuyên nghiệp.</p>
            <p>✔ Vị trí ứng tuyển rõ ràng.</p>
            <p>✔ Email nghiêm túc và bố cục dễ nhìn.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '6.2. Mục tiêu nghề nghiệp',
    tag: 'Slide 6',
    content: `
      <div class="presenter-slide-content">
        <h2>6.2. Mục tiêu nghề nghiệp</h2>
        <div style="margin-top: 20px; background: #f7fbff; padding: 16px; border-radius: 10px; border-left: 4px solid #0070cc;">
          <ul style="margin: 0 0 0 20px; padding: 0;">
            <li>Mục tiêu nghề nghiệp ngắn gọn, không lan man.</li>
            <li>Phản ánh năng lực cá nhân một cách rõ ràng.</li>
            <li>Có mục tiêu ngắn hạn và dài hạn.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: '6.3. Trình độ và bằng cấp',
    tag: 'Slide 6',
    content: `
      <div class="presenter-slide-content">
        <h2>6.3. Trình độ và bằng cấp</h2>
        <div style="margin-top: 20px; display: grid; gap: 12px; font-size: 0.95rem;">
          <div style="background: #f0f6ff; padding: 14px; border-radius: 10px; border-left: 4px solid #0052a3;">
            <p>✔ CV trình bày rất hợp lý, có đầy đủ các thông tin gồm:</p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background: #f0f6ff; padding: 14px; border-radius: 10px;">
              <p>✔ Tên trường đại học</p>
              <p>✔ Chuyên ngành</p>
              <p>✔ GPA / xếp loại</p>
            </div>
            <div style="background: #f7fbff; padding: 14px; border-radius: 10px;">
              <p>✔ Chứng chỉ TOEIC</p>
              <p>✔ Chứng chỉ chuyên môn</p>
              <p>✔ Khóa học liên quan</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '6.4. Kinh nghiệm làm việc',
    tag: 'Slide 6',
    content: `
      <div class="presenter-slide-content">
        <h2>6.4. Kinh nghiệm làm việc</h2>
        <div style="margin-top: 20px; background: #f0f6ff; padding: 16px; border-radius: 10px; border-left: 4px solid #0052a3;">
          <ul style="margin: 0 0 0 20px; padding: 0;">
            <li>Nêu rõ chức danh và công ty.</li>
            <li>Mô tả công việc kèm số liệu và thành tựu cụ thể.</li>
            <li>Giúp tăng độ tin cậy cho CV.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: '6.5. Trình bày kĩ năng',
    tag: 'Slide 6',
    content: `
      <div class="presenter-slide-content">
        <h2>6.5. Trình bày kĩ năng</h2>
        <div style="margin-top: 20px; background: #f7fbff; padding: 16px; border-radius: 10px; border-left: 4px solid #0070cc;">
          <ul style="margin: 0 0 0 20px; padding: 0;">
            <p>✔ Trình bày một cách khoa học:</p>
            <li>Kỹ năng chuyên môn.</li>
            <li>Kỹ năng mềm.</li>
            <li>Kỹ năng sử dụng công cụ.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: '6.6. Bài học rút ra',
    tag: 'Slide 6',
    content: `
      <div class="presenter-slide-content">
        <h2>6.6. Bài học rút ra khi viết CV</h2>
        <div style="margin-top: 20px; display: grid; gap: 10px; font-size: 0.95rem;">
          <div style="background: #f0f6ff; padding: 14px; border-radius: 10px; border-left: 4px solid #0052a3;">
            <p>✔ Trình bày đẹp, dễ đọc và ngắn gọn.</p>
            <p>✔ Chọn ảnh lịch sự, chuyên nghiệp.</p>
            <p>✔ Không sai chính tả và giữ thông tin trung thực.</p>
          </div>
          <div style="background: #f7fbff; padding: 14px; border-radius: 10px; border-left: 4px solid #0070cc;">
            <p>✔ Nhấn mạnh thành tích bằng số liệu.</p>
            <p>✔ Phù hợp với vị trí ứng tuyển.</p>
            <p>✔ Cập nhật thường xuyên.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '7. Tổng kết',
    tag: 'Slide 7',
    content: `
      <div class="presenter-slide-content">
        <h2>7. Tổng kết</h2>
        <div style="margin-top: 18px; background: #f7fbff; padding: 16px; border-radius: 12px; border-left: 4px solid #0070cc; font-size: 0.95rem; line-height: 1.7;">
          <p>Qua nội dung trình bày, nhóm nhận thấy rằng CV là "tấm vé đầu tiên" giúp ứng viên tiếp cận nhà tuyển dụng. Một CV hiệu quả không chỉ trình bày đầy đủ thông tin mà còn phải thể hiện rõ mục tiêu nghề nghiệp, kinh nghiệm làm việc, trình độ học vấn và các kỹ năng phù hợp với vị trí ứng tuyển.</p>
          <p>Đối với sinh viên, dù chưa có nhiều kinh nghiệm, vẫn có thể tạo ấn tượng bằng các dự án học tập, hoạt động ngoại khóa, chứng chỉ và kỹ năng chuyên môn. Bên cạnh đó, cần trình bày CV ngắn gọn, rõ ràng, trung thực và sử dụng số liệu cụ thể để chứng minh năng lực.</p>
          <p>Việc đầu tư xây dựng một CV chất lượng sẽ giúp tăng khả năng vượt qua vòng sàng lọc hồ sơ và mở ra nhiều cơ hội nghề nghiệp trong tương lai.</p>
        </div>
      </div>
    `
  },
  {
    title: '8. Câu hỏi ôn tập trắc nghiệm 1',
    tag: 'Slide 8',
    content: `
      <div class="presenter-slide-content">
        <h2>8. Câu hỏi ôn tập trắc nghiệm 1</h2>
        <div class="quiz-wrap">
          <div class="quiz-question" data-correct-text="B. Viết ngắn gọn, phù hợp với vị trí ứng tuyển.">
            <div class="quiz-question-title">Câu 1. Mục tiêu nghề nghiệp trong CV nên viết như thế nào?</div>
            <div class="quiz-options">
              <button class="quiz-option" type="button" data-correct="false">A. Viết thật dài để gây ấn tượng.</button>
              <button class="quiz-option" type="button" data-correct="true">B. Viết ngắn gọn, phù hợp với vị trí ứng tuyển.</button>
              <button class="quiz-option" type="button" data-correct="false">C. Sao chép từ Internet.</button>
              <button class="quiz-option" type="button" data-correct="false">D. Không cần ghi.</button>
            </div>
            <div class="quiz-answer-note">Chọn đáp án để xem kết quả.</div>
            <div class="quiz-correct-answer"></div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '9. Câu hỏi ôn tập trắc nghiệm 2',
    tag: 'Slide 9',
    content: `
      <div class="presenter-slide-content">
        <h2>9. Câu hỏi ôn tập trắc nghiệm 2</h2>
        <div class="quiz-wrap">
          <div class="quiz-question" data-correct-text="B. Thành tích và kết quả đạt được.">
            <div class="quiz-question-title">Câu 2. Khi trình bày kinh nghiệm làm việc, nội dung nào quan trọng nhất?</div>
            <div class="quiz-options">
              <button class="quiz-option" type="button" data-correct="false">A. Màu sắc CV.</button>
              <button class="quiz-option" type="button" data-correct="true">B. Thành tích và kết quả đạt được.</button>
              <button class="quiz-option" type="button" data-correct="false">C. Sở thích cá nhân.</button>
              <button class="quiz-option" type="button" data-correct="false">D. Chiều cao, cân nặng.</button>
            </div>
            <div class="quiz-answer-note">Chọn đáp án để xem kết quả.</div>
            <div class="quiz-correct-answer"></div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '10. Câu hỏi ôn tập trắc nghiệm 3',
    tag: 'Slide 10',
    content: `
      <div class="presenter-slide-content">
        <h2>10. Câu hỏi ôn tập trắc nghiệm 3</h2>
        <div class="quiz-wrap">
          <div class="quiz-question" data-correct-text="A. Hoạt động câu lạc bộ, tình nguyện và dự án học tập.">
            <div class="quiz-question-title">Câu 3. Sinh viên chưa có kinh nghiệm làm việc có thể ghi nội dung nào trong CV?</div>
            <div class="quiz-options">
              <button class="quiz-option" type="button" data-correct="true">A. Hoạt động câu lạc bộ, tình nguyện và dự án học tập.</button>
              <button class="quiz-option" type="button" data-correct="false">B. Bỏ trống hoàn toàn.</button>
              <button class="quiz-option" type="button" data-correct="false">C. Chép kinh nghiệm của người khác.</button>
              <button class="quiz-option" type="button" data-correct="false">D. Ghi thông tin không đúng sự thật.</button>
            </div>
            <div class="quiz-answer-note">Chọn đáp án để xem kết quả.</div>
            <div class="quiz-correct-answer"></div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '11. Câu hỏi ôn tập trắc nghiệm 4',
    tag: 'Slide 11',
    content: `
      <div class="presenter-slide-content">
        <h2>11. Câu hỏi ôn tập trắc nghiệm 4</h2>
        <div class="quiz-wrap">
          <div class="quiz-question" data-correct-text="C. Giao tiếp và làm việc nhóm.">
            <div class="quiz-question-title">Câu 4. Kỹ năng nào sau đây thuộc nhóm kỹ năng mềm?</div>
            <div class="quiz-options">
              <button class="quiz-option" type="button" data-correct="false">A. Microsoft Excel.</button>
              <button class="quiz-option" type="button" data-correct="false">B. Canva.</button>
              <button class="quiz-option" type="button" data-correct="true">C. Giao tiếp và làm việc nhóm.</button>
              <button class="quiz-option" type="button" data-correct="false">D. Photoshop.</button>
            </div>
            <div class="quiz-answer-note">Chọn đáp án để xem kết quả.</div>
            <div class="quiz-correct-answer"></div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '12. Câu hỏi ôn tập trắc nghiệm 5',
    tag: 'Slide 12',
    content: `
      <div class="presenter-slide-content">
        <h2>12. Câu hỏi ôn tập trắc nghiệm 5</h2>
        <div class="quiz-wrap">
          <div class="quiz-question" data-correct-text="B. Trình bày ngắn gọn, rõ ràng, trung thực và phù hợp với vị trí ứng tuyển.">
            <div class="quiz-question-title">Câu 5. Một CV chuyên nghiệp nên có đặc điểm nào sau đây?</div>
            <div class="quiz-options">
              <button class="quiz-option" type="button" data-correct="false">A. Dài trên 5 trang.</button>
              <button class="quiz-option" type="button" data-correct="true">B. Trình bày ngắn gọn, rõ ràng, trung thực và phù hợp với vị trí ứng tuyển.</button>
              <button class="quiz-option" type="button" data-correct="false">C. Chỉ ghi thông tin cá nhân.</button>
              <button class="quiz-option" type="button" data-correct="false">D. Sử dụng nhiều màu sắc và hình ảnh.</button>
            </div>
            <div class="quiz-answer-note">Chọn đáp án để xem kết quả.</div>
            <div class="quiz-correct-answer"></div>
          </div>
        </div>
      </div>
    `
  }
];

const overlay = document.getElementById('presenterOverlay');
const stage = document.getElementById('presenterStage');
const counter = document.getElementById('presenterCounter');
const closeBtn = document.getElementById('closePresenter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbItems = document.querySelectorAll('.thumb-item');
const navDots = document.querySelectorAll('.slide-nav span');
const chip = document.querySelector('.chip');
const previewChip = document.getElementById('previewChip');
const previewStage = document.getElementById('previewStage');
const previewPanel = document.getElementById('previewPanel');
const fullscreenBtn = document.getElementById('fullscreenBtn');

let currentIndex = 0;

function renderSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  stage.innerHTML = slides[currentIndex].content;
  previewStage.innerHTML = slides[currentIndex].content;
  counter.textContent = `${currentIndex + 1} / ${slides.length}`;
  chip.textContent = `Slide ${currentIndex + 1} / ${slides.length}`;
  previewChip.textContent = `Slide ${currentIndex + 1} / ${slides.length}`;
  thumbItems.forEach((item, itemIndex) => {
    item.classList.toggle('active', itemIndex === currentIndex);
  });
  navDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === currentIndex);
  });

  attachQuizHandlers();
}

function attachQuizHandlers() {
  document.querySelectorAll('.quiz-question').forEach((question) => {
    const options = question.querySelectorAll('.quiz-option');

    options.forEach((option) => {
      option.addEventListener('click', () => {
        const correctOption = question.querySelector('.quiz-option[data-correct="true"]');
        const note = question.querySelector('.quiz-answer-note');
        const answerText = question.querySelector('.quiz-correct-answer');

        options.forEach((item) => {
          item.classList.remove('correct', 'incorrect');
          if (item === correctOption) {
            item.classList.add('correct');
          } else if (item === option) {
            item.classList.add(option.dataset.correct === 'true' ? 'correct' : 'incorrect');
          }
        });

        if (note) {
          note.textContent = option.dataset.correct === 'true' ? 'Đúng rồi!' : 'Sai rồi!';
          note.style.color = option.dataset.correct === 'true' ? '#16a34a' : '#dc2626';
        }

        if (answerText) {
          answerText.textContent = option.dataset.correct === 'true' ? '' : `Đáp án đúng: ${question.dataset.correctText}`;
        }
      });
    });
  });
}

function openPresenter(index, autoFullscreen = true) {
  renderSlide(index);
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  if (autoFullscreen && !document.fullscreenElement) {
    const target = overlay || document.documentElement;
    const requestFullScreen = target.requestFullscreen || target.webkitRequestFullscreen || target.msRequestFullscreen;
    const fullscreenOptions = { navigationUI: 'hide' };

    if (requestFullScreen) {
      try {
        requestFullScreen.call(target, fullscreenOptions);
      } catch (error) {
        requestFullScreen.call(target);
      }
    }
  }
}

function closePresenter() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (document.fullscreenElement) {
    document.exitFullscreen?.();
  }
}

thumbItems.forEach((item) => {
  item.addEventListener('click', () => renderSlide(Number(item.dataset.slideIndex)));
});

previewPanel.addEventListener('click', () => openPresenter(currentIndex, true));
previewPanel.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openPresenter(currentIndex, true);
  }
});

fullscreenBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  openPresenter(currentIndex, true);
});

navDots.forEach((dot) => {
  dot.addEventListener('click', () => renderSlide(Number(dot.dataset.index)));
});

closeBtn.addEventListener('click', closePresenter);
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    closePresenter();
  }
});

prevBtn.addEventListener('click', () => renderSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => renderSlide(currentIndex + 1));

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement && overlay.classList.contains('open')) {
    closePresenter();
  }
});

document.addEventListener('keydown', (event) => {
  if (!overlay.classList.contains('open')) return;
  if (event.key === 'Escape') {
    closePresenter();
  } else if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
    event.preventDefault();
    renderSlide(currentIndex + 1);
  } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    renderSlide(currentIndex - 1);
  }
});

renderSlide(0);
