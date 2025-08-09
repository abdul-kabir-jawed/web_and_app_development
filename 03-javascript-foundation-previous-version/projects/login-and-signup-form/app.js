// Global state variables
let isSignInMode = false;
let userRecord = []

// Modal functionality for displaying messages
function showModal(message, type = 'info', title = '') {
    const modal = document.getElementById('customModal');
    const icon = document.getElementById('modalIcon');
    const titleElement = document.getElementById('modalTitle');
    const messageElement = document.getElementById('modalMessage');

    const modalConfig = {
        success: {
            iconClass: 'fas fa-check-circle',
            defaultTitle: 'Success!'
        },
        error: {
            iconClass: 'fas fa-exclamation-triangle',
            defaultTitle: 'Error'
        },
        info: {
            iconClass: 'fas fa-info-circle',
            defaultTitle: 'Information'
        }
    };

    const config = modalConfig[type] || modalConfig.info;

    icon.innerHTML = `<i class="${config.iconClass}"></i>`;
    icon.className = `modal-icon ${type}`;
    titleElement.textContent = title || config.defaultTitle;
    messageElement.textContent = message;

    modal.classList.add('show');
}

function hideModal() {
    const modal = document.getElementById('customModal');
    modal.classList.remove('show');
}

// Form switching functionality
function switchForms() {
    const detailsElement = document.getElementById("details");
    const showcaseElement = document.getElementById("showcase");

    if (isSignInMode) {
        showSignUpForm(detailsElement);
        showSignInPrompt(showcaseElement);
        isSignInMode = false;
    } else {
        showSignInForm(detailsElement);
        showSignUpPrompt(showcaseElement);
        isSignInMode = true;
    }
}

function showSignUpForm(element) {
    element.innerHTML = `
        <h1 id="detail_title">Sign Up</h1>
        <form>
            <div id="buttons">
                <a href="#" class="external_way"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="external_way"><i class="fa-brands fa-google"></i></a>
                <a href="#" class="external_way"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <p>or use your email for registration</p>
            
            <input type="text" placeholder="Name" id="name" required>
            <input type="email" placeholder="Email" id="email" required>
            <input type="password" placeholder="Password" id="password" required>
            
            <button type="button" class="button" onclick="recordDetails()">SIGN UP</button>
        </form>
    `;
}

function showSignInForm(element) {
    element.innerHTML = `
        <h1 id="detail_title">Sign In</h1>
        <form>
            <div id="buttons">
                <a href="#" class="external_way"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="external_way"><i class="fa-brands fa-google"></i></a>
                <a href="#" class="external_way"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <p>or use your account</p>
            
            <input type="email" placeholder="Email" id="email_check" required>
            <input type="password" placeholder="Password" id="password_check" required>
            
            <a href="#" class="forgot-password">Forgot your password?</a>
            <button type="button" class="button" onclick="detailsCheck()">SIGN IN</button>
        </form>
    `;
}

function showSignUpPrompt(element) {
    element.innerHTML = `
        <h1 id="greetings">Hello, Friend!</h1>
        <p id="greeting_line">Enter your personal details and start journey with us</p>
        <button id="signup_btn" class="button" onclick="switchForms()">SIGN UP</button>
    `;
}

function showSignInPrompt(element) {
    element.innerHTML = `
        <h1 id="greetings">Welcome Back!</h1>
        <p id="greeting_line">To keep connected with us please login with your personal info</p>
        <button id="signin_btn" class="button" onclick="switchForms()">SIGN IN</button>
    `;
}

// User registration with validation
function recordDetails() {
    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const userPassword = document.getElementById("password");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    const userDetail = {};

    const userNameStore = userName.value.toLowerCase().trim();
    const userEmailStore = userEmail.value.trim();
    const userPasswordStore = userPassword.value.trim();
    const emailExists = userRecord.some(user => user.email === userEmailStore.toLowerCase());

    if (passwordRegex.test(userPasswordStore)) {
        if (emailRegex.test(userEmailStore)) {
            userDetail["name"] = userNameStore;
            userDetail["email"] = userEmailStore.toLowerCase();
            userDetail["password"] = userPasswordStore;
            if (!emailExists) {
                userRecord.push(userDetail);
                try {
                    localStorage.setItem("current_users", JSON.stringify(userRecord));
                } catch (error) {
                    showModal("Failed to save account. Please try again.", "error");
                    userRecord.pop();
                    return;
                }

                userName.value = "";
                userEmail.value = "";
                userPassword.value = "";

                showModal("Account created successfully!", "success");
                console.log(JSON.parse(localStorage.getItem("current_users")))
                switchForms();
            } else {
                showModal("Email already been in used", "error");
            }
        } else {
            showModal("Please enter a valid email address", "error");
            return;
        }
    } else {
        showModal("Password must contain at least 8 characters, including uppercase, lowercase, number and symbol (@$!%*?&)", "error");
        return;
    }
}

function loadExistingUsers() {
    try {
        const storedUsers = localStorage.getItem("current_users");
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            userRecord = users || [];
        }
    } catch (error) {
        console.error('localStorage error:', error);
        userRecord = [];
    }
}

// User authentication
function detailsCheck() {
    const enterEmail = document.getElementById("email_check").value.trim().toLowerCase(); // Fixed: convert to lowercase
    const enterPassword = document.getElementById("password_check").value.trim();

    try {
        const storedUsers = localStorage.getItem("current_users");
        if (!storedUsers) {
            showModal("No users found. Please sign up first.", "error");
            return;
        }
        const users = JSON.parse(storedUsers);
    } catch (error) {
        showModal("Data error. Please refresh and try again.", "error");
        return;
    }

    const users = JSON.parse(localStorage.getItem("current_users"));
    let userFound = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i]["email"] === enterEmail) {
            userFound = true;
            if (users[i]["password"] === enterPassword) {

                document.getElementById("email_check").value = "";
                document.getElementById("password_check").value = "";
                showModal("Successfully Login!", "success");
                return;
            } else {
                showModal("Wrong password", "error");
                return;
            }
        }
    }
    if (!userFound) {
        showModal("Email not found. Please check your email or sign up.", "error");
    }
}




// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    loadExistingUsers();
    
    const signupBtn = document.getElementById('signup_btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', switchForms);
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const okBtn = document.getElementById("modalOkButton")
    const modal = document.getElementById('customModal')
    okBtn.addEventListener("click", () => modal.classList.remove("show"))
})