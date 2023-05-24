export function checkPassword(password: string): boolean {

    const passwordInput = document.getElementById('register_password') as HTMLInputElement;
    const requirementList = document.querySelectorAll('.requirement-list li') as NodeListOf<HTMLLIElement>;

    const requirements = [
        { regex: /.{8,}/, index: 0 },
        { regex: /[0-9]/, index: 1 },
        { regex: /[a-z]/, index: 2 },
        { regex: /[^A-Za-z0-9]/, index: 3 },
        { regex: /[A-Z]/, index: 4 },
    ];

    requirements.forEach(item => {
        const isValid = item.regex.test(passwordInput.value);
        const requirementItem = requirementList[item.index];

        if (isValid) {
            requirementItem.classList.add("valid");
        } else {
            requirementItem.classList.remove("valid");
        }
    });

    const isValid = requirements.every(item => item.regex.test(password));
    return isValid;
}
