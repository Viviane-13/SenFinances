import {useFinances} from '../../hooks/useFinances';
import {useTransactionFilters} from '../../hooks/useTransactionFilters';
import {defaultFilterValue} from '../../services/constants';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import {Container} from './styles';
import {
  getTotalBalance,
  getTotalCredit,
  getTotalDebit,
} from '../../services/utils';

function FinanceStatus() {
  const {transactions} = useFinances();
  const {filters} = useTransactionFilters();

  const getFilteredTransactions = () => {
    if (filters.category !== defaultFilterValue) {
      return transactions.filter(
        transaction => transaction.category === filters.category,
      );
    } else {
      return transactions;
    }
  };

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{getTotalCredit(getFilteredTransactions(), true)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {getTotalDebit(getFilteredTransactions(), true)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{getTotalBalance(transactions, true)}</strong>
      </div>
    </Container>
  );
}

export default FinanceStatus;
