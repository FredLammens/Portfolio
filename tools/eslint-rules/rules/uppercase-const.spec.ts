import { TSESLint } from '@typescript-eslint/utils';
import { rule, RULE_NAME } from './uppercase-const';

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run(RULE_NAME, rule, {
  valid: [
    `const EXAMPLE = true;`,
    `const ANOTHER_ONE = false;`,
    `let example = 'jeez';`,
    `var k = 12;`,
  ],
  invalid: [
    {
      code: `const example = true;`,
      errors: [
        {
          messageId: 'uppercaseConst',
        },
      ],
    },
  ],
});
