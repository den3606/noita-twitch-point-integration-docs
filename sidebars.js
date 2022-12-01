/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    'intro',
    {
      type: 'category',
      label: '設定方法',
      link: { type: 'doc', id: 'how-to-setup/index' },
      collapsed: false,
      items: [
        'how-to-setup/step1',
        'how-to-setup/step2',
        'how-to-setup/step3',
        'how-to-setup/step4'
      ],
    },
    'event-list'
  ],
};

module.exports = sidebars;
