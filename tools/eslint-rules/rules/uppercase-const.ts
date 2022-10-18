/**
 * This file sets you up with with structure needed for an ESLint rule.
 *
 * It leverages utilities from @typescript-eslint to allow TypeScript to
 * provide autocompletions etc for the configuration.
 *
 * Your rule's custom logic will live within the create() method below
 * and you can learn more about writing ESLint rules on the official guide:
 *
 * https://eslint.org/docs/developer-guide/working-with-rules
 *
 * You can also view many examples of existing rules here:
 *
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/rules
 */

import { ESLintUtils, TSESTree, ASTUtils } from '@typescript-eslint/utils';

// NOTE: The rule will be available in ESLint configs as "@nrwl/nx/workspace/uppercase-const"
export const RULE_NAME = 'uppercase-const';

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: ``,
      recommended: 'error',
    },
    schema: [],
    messages: {
      uppercaseConst: 'Constants should be written in uppercase!',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      'VariableDeclaration[kind="const"]'(node: TSESTree.VariableDeclaration) {
        for (const declarator of node.declarations) {
          const id = declarator.id;
          if (ASTUtils.isIdentifier(id)) {
            const name = id.name;
            if (name !== name.toUpperCase()) {
              context.report({
                node: id,
                messageId: 'uppercaseConst',
                fix: (fixer) => {
                  return fixer.replaceText(id, id.name.toUpperCase());
                },
              });
            }
          }
        }
      },
    };
  },
});
