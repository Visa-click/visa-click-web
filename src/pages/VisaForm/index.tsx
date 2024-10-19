import { FC } from 'react';
import { Container } from '@styled/com';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { fadeIn } from '@styled/helpers';
import { Scanning } from './Scanning';
import { ManualForm } from './ManualForm';
import { Payment } from './Payment';
import { PaymentSuccess } from './PaymentSuccess';
import { TVisaForm, useVisaContext, VisaProvider } from './VisaProvider';
import { Progress } from './com/Progress';

const StepContent: FC = () => {
  const { currentStep } = useVisaContext();

  switch (currentStep) {
    case 'scanning':
      return <Scanning />;
    case 'manualForm':
      return <ManualForm />;
    case 'payment':
      return <Payment />;
    case 'paymentSuccess':
      return <PaymentSuccess />;
    default:
      return null;
  }
};

const VisaForm: FC = () => {
  const form = useForm<TVisaForm>();

  return (
    <VisaProvider form={form}>
      <Wrapper>
        <Progress />
        <StepContent />
      </Wrapper>
    </VisaProvider>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: auto;
  > * {
    animation: ${fadeIn} 0.5s;
  }
`;

export default VisaForm;
