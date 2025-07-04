# FinLink
> One dashboard. All your banks. Real-time insights and secure transfers.

FinLink is a modern, secure, and fully responsive financial dashboard that allows users to connect multiple bank accounts, visualize real-time transaction data, and send money to others—all from one unified interface.

Built with cutting-edge web technologies and trusted financial APIs like Plaid and Dwolla, FinLink simplifies financial management while keeping user data private and protected using SSR authentication and strong validation.

## ⎚ Live Demo

> [Coming Soon]

# 🤖 Features

- Ultra-secure **SSR authentication** with Appwrite and robust form validations using React Hook Form and Zod.
- Integrate with **Plaid** to securely link and fetch data from multiple bank accounts.
- Total balance from all connected banks
- Recent transactions
- Spending categorized by type
- View all connected accounts
- Display account names, balances, and bank info
- Paginated view with filters (by bank, category, date)
- Search and sort transactions
- Dynamic data updates throughout the app upon actions like adding new banks or making transfers.
- Send money to other FinLink users using **Dwolla**
- Input fields: recipient ID, amount, memo, etc.
- Clean UI with a mobile-first design, adapting seamlessly across all devices.
- Built with scalable, modular components for long-term maintainability.



## 📚 Techstack
- **Framework:** [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Backend & Auth:** [Appwrite](https://appwrite.io/)
- **Bank Integrations:** [Plaid](https://plaid.com/) for account linking, [Dwolla](https://www.dwolla.com/) for funds transfer
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **UI & Styling:** [Tailwind CSS](https://tailwindcss.com/) + [ShadCN UI](https://ui.shadcn.com/)
- **Charts:** [Chart.js](https://www.chartjs.org/)

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/maithy-a/finlink.git
cd finlink

# Install dependencies
npm install

# Start the development server
npm run dev
```

# ⚙️ Enviroment Variables
Create a .env.local file in the root directory and add the following:
``` bash
#NEXT
NEXT_PUBLIC_SITE_URL=http://localhost:3000

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_ITEM_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
NEXT_APPWRITE_KEY=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=
DWOLLA_ENV=
```
# 🗺️ Roadmap
-  Budget planning and monthly goals
- User notifications & transaction alerts
- Dark mode toggle
- Exportable reports (PDF/CSV)
- Integration with savings & investment APIs

# 🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open a PR or submit an issue to improve this project.

# 📄 License
> [MIT](LICENSE)
