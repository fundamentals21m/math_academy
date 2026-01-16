import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2>Austrian Definitions of the Supply of Money</h2>

      <p>
        Defining the money supply seems straightforward but proves surprisingly difficult. What
        counts as money? Currency and coins, certainly. But what about checking deposits? Savings
        deposits? Money market funds? The Austrian approach provides principled criteria for
        defining money based on the nature and functions of money.
      </p>

      <Callout type="info">
        <strong>Why Definition Matters:</strong> The definition of the money supply is not merely
        academic. Monetary policy targets the money supply (or its growth rate), and the effects
        of policy depend on what is included. A poorly defined money supply leads to poorly
        calibrated policy—with potentially severe consequences.
      </Callout>

      <h3>The Functional Approach</h3>
      <p>
        The Austrian approach defines money functionally. Money is the generally accepted medium
        of exchange. Whatever serves this function is money; whatever does not is not money.
        This seems simple, but the application is complicated by the existence of close
        substitutes for money.
      </p>

      <p>
        Currency and coin clearly function as media of exchange. Checking deposits also function
        as media of exchange; you can write a check to buy goods. But savings deposits do not
        directly serve as media of exchange; you cannot write a check on a savings account.
        They must first be converted to checking deposits or currency.
      </p>

      <h3>The Austrian Money Supply</h3>
      <p>
        Murray Rothbard proposed a precise definition of the Austrian Money Supply (AMS or TMS—
        True Money Supply). It includes currency in circulation, all checkable deposits at banks,
        and savings deposits at banks. It excludes time deposits (CDs), money market fund shares,
        and other assets that are not immediately available as media of exchange.
      </p>

      <Callout type="success">
        <strong>The Rothbardian Criterion:</strong> The key criterion is whether an asset can
        serve immediately as a medium of exchange without conversion. Checking deposits qualify;
        savings deposits are borderline (they can be converted on demand but are not directly
        spendable); time deposits do not qualify because withdrawal is restricted.
      </Callout>

      <h3>The Problem of "Near-Moneys"</h3>
      <p>
        Near-moneys are assets that are close substitutes for money but not quite money. Money
        market fund shares, Treasury bills, and similar liquid assets can be converted to money
        quickly and cheaply. Should they be included in the money supply?
      </p>

      <p>
        The Austrian position is that near-moneys should not be included in the money supply
        because they are not media of exchange. You cannot pay for goods with a money market
        fund share; you must first convert it to money. The distinction between money and
        near-money, though sometimes fuzzy, is important.
      </p>

      <h3>Contrast with Official Definitions</h3>
      <p>
        The Federal Reserve publishes multiple measures of the money supply: M1 (currency plus
        checkable deposits), M2 (M1 plus savings deposits, money market funds, and small CDs),
        and formerly M3 (M2 plus large CDs and institutional money market funds). These measures
        have changed over time as the Fed has struggled with definitional issues.
      </p>

      <Callout type="warning">
        <strong>The Fed's Confusion:</strong> The Fed's multiple definitions reflect conceptual
        confusion about what money is. The Austrian approach is cleaner: money is the medium
        of exchange, period. Assets that serve this function are money; assets that do not
        are not. There is no need for M1, M2, M3, and so on.
      </Callout>

      <h3>Credit and Money</h3>
      <p>
        A related issue is the distinction between money and credit. When a bank makes a loan,
        does it create money? The Austrian answer depends on the type of deposit created. If
        the loan creates a checkable deposit, then money has been created. If it creates a
        time deposit, then money has not been created; credit has merely been extended.
      </p>

      <p>
        This distinction is crucial for understanding fractional-reserve banking. When banks
        create checkable deposits through lending, they expand the money supply. This expansion
        is at the heart of the Austrian theory of the business cycle.
      </p>

      <h3>Money Supply and Inflation</h3>
      <p>
        The definition of the money supply affects our measurement of inflation in its original
        sense—the increase in the quantity of money. A broader definition will show more inflation
        (more money creation); a narrower definition will show less. This is not merely semantic;
        different measures may give different signals about monetary policy.
      </p>

      <Callout type="info">
        <strong>The Austrian Advantage:</strong> The Austrian definition of the money supply
        tracks what actually functions as money in the economy. It avoids counting near-moneys
        that do not serve as media of exchange while including all assets that do. This
        principled approach provides clearer guidance for monetary analysis.
      </Callout>

      <h3>Conclusion: Principled Definition</h3>
      <p>
        The Austrian approach to defining money is based on function, not convention. Money is
        whatever serves as the generally accepted medium of exchange. This functional definition
        provides a principled basis for measuring the money supply and analyzing monetary phenomena.
      </p>

      <Callout type="success">
        <strong>The Takeaway:</strong> Proper definition of the money supply is essential for
        sound monetary analysis. The Austrian approach—focusing on the medium-of-exchange
        function—provides clarity that the Fed's shifting definitions lack. Understanding what
        money is helps us understand what monetary policy does.
      </Callout>
    </LessonLayout>
  );
}
