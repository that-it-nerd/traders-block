import React from "react";
import styles from "./card.module.scss";
import referralImage from "../../public/images/referral.jpeg";
import Image from "next/image";

interface Props {
  type: string;
}
const Card: React.FC<Props> = ({ type }) => {
  const ISSERVER = typeof window === "undefined";
  let theme;
  if (!ISSERVER) {
    theme = localStorage.getItem("theme");
  }
  return (
    <div className={`${styles.card} ${theme === "light" && styles.light}`}>
      {type === "card" && (
        <div className={styles.card_content}>
          <div className={styles.income_section}>
            <div className={styles.income_content}>
              <h4>Total incomes</h4>
              <h4 className="bold">612.785</h4>
            </div>
            <div className={`${styles.income_content}`}>
              <h4>Residual incomes</h4>
              <h4 className="bold">112.785</h4>
            </div>
          </div>
          <button>Receive</button>
        </div>
      )}
      {type === "referral" && (
        <div className={`${styles.card_content}  ${styles.referral_card}`}>
          <h3>Referral System:</h3>
          <p>Earn 10% for direct referrals and 5% for indirect referrals</p>
          <div className="flex justify-center">
            <Image src={referralImage} />
          </div>
        </div>
      )}
      {type === "table" && (
        <table
          className={`table-fixed border-spacing-4 ${styles.custom_table}`}
        >
          <thead>
            <tr>
              <th>ID Number</th>
              <th>Nickname</th>
              <th colSpan={2} className={styles.common_header}>
                Registration Time
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>076854</td>
              <td>Dave4demi</td>
              <td className="text-center">08-05-22</td>
              <td className="text-center">10:40</td>
            </tr>
            <tr>
              <td>076854</td>
              <td>Dave4demi</td>
              <td className="text-center">08-05-22</td>
              <td className="text-center">10:40</td>
            </tr>
            <tr>
              <td>076854</td>
              <td>Dave4demi</td>
              <td className="text-center">08-05-22</td>
              <td className="text-center">10:40</td>
            </tr>
            <tr>
              <td>076854</td>
              <td>Dave4demi</td>
              <td className="text-center">08-05-22</td>
              <td className="text-center">10:40</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Card;
