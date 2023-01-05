import { AuthPage } from "../components/AuthPage";
import { Container } from "../components/Container";
import { TransactionForm } from "../components/forms/Transaction";

export default function Import() {
  return (
    <AuthPage route="/import">
      <Container classNames="h-screen">
        <TransactionForm />
      </Container>
    </AuthPage>
  );
}
