import React from "react";

const headers = [
  {
    key: 1,
    title: "Invoice Date",
  },
  {
    key: 2,
    title: "Amount",
  },
  {
    key: 3,
    title: "Package",
  },
  {
    key: 4,
    title: "Status",
  },
];

const bills = [
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
  {
    key: 1,
    date: "02 Sept 2023",
    amount: 29.99,
    status: "Successful",
    package: "Enterprise",
  },
  {
    key: 2,
    date: "15 Aug 2023",
    amount: 19.99,
    status: "Pending",
    package: "Basic",
  },
  {
    key: 3,
    date: "30 Jul 2023",
    amount: 49.99,
    status: "Failed",
    package: "Premium",
  },
  {
    key: 4,
    date: "10 Jun 2023",
    amount: 39.99,
    status: "Successful",
    package: "Standard",
  },
  {
    key: 5,
    date: "22 May 2023",
    amount: 24.99,
    status: "Successful",
    package: "Starter",
  },
];

const BillingRowsComponent = () => {
  return (
    <div className="flex column gap1rem small_scroll w-[60%] margin_auto overflow-auto">
      <section className="flex column sticky top-0">
        <div className="flex align_center p-2">
          {headers.map((header) => (
            <h4
              key={header.key}
              className="flex-1 font-[700] text-[18px] text-[--light_text]"
            >
              {header.title}
            </h4>
          ))}
        </div>
        <hr className="hr" />
      </section>
      <div className="flex column gap15rem">
        {bills.map((bill) => {
          const status =
            bill.status === "Successful"
              ? "text-[--green_color]"
              : bill.status === "Failed"
              ? "text-[--red_color]"
              : "";
          return (
            <div key={bill.key} className="flex column gap05rem">
              <div key={bill.key} className="flex align_center">
                <p className="flex-1 text-[16px]">{bill.date}</p>
                <p className="flex-1 text-[16px]">{bill.amount}</p>
                <p className="flex-1 text-[16px]">{bill.package}</p>
                <p className={`flex-1 text-[16px] ${status} font-[600]`}>
                  {bill.status}
                </p>
              </div>
              <hr className="hr" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BillingRowsComponent;
