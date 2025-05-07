import React, { useState } from 'react';

function NAAC() {
  const [activeTab, setActiveTab] = useState('Extended Profile');
  const tabs = [
    {
      name: 'Extended Profile',
      data: [
        {
          title: '1: Students',
          link: "Link",
          rows: [
            { label: '1.1 – Proof', link: "https://gvrs.ac.in/NAAC/EP/1.1/1.1%20PROOF.pdf" },
            { label: '1.1 – Data File', link: "https://gvrs.ac.in/NAAC/EP/1.1/1.1%20Datasheet.xlsx" },
          ]
        },
        {
          title: '2: Teachers',
          link: "Link",
          rows: [
            { label: '2.1 – Proof', link: "https://gvrs.ac.in/NAAC/EP/2.1/2.1%20proof.pdf" },
            { label: '2.1 – Data File', link: "https://gvrs.ac.in/NAAC/EP/2.1/2.1%20DATA%20FILE.xlsx" },
          ]
        },
        {
          title: '3: Institution',
          link: "Link",
          rows: [
            { label: '3.1 – Data File', link: "https://gvrs.ac.in/NAAC/EP/3.1/3.1_179%20(9).xlsx" },
          ]
        },
      ]
    },
    {
      name: 'Criterion 1',
      data: [
        {
          title: 'Criterion 1 – Curricular Aspects',
          link: "Link",
          rows: []
        },
        {
          title: '1.1 Curricular Planning and Implementation',
          rows: [
            { label: 'Metric: 1.1.1 – Proof', link: "https://gvrs.ac.in/NAAC/C1/1.1/1.1.1%20proof/1.1.1%20PDF.pdf" },
            { label: 'Metric: 1.1.1 – URL', link: "https://gvrs.ac.in/NAAC/C1/1.1/1.1.1%20url/1.1.1%20url.pdf" },
          ]
        },
        {
          title: '1.2 Academic Flexibility',
          link: "Link",
          rows: [
            { label: 'Metric: 1.2.1 – URL', link: "https://gvrs.ac.in/NAAC/C1/1.2/1.2.1/1.2.1%20URL/1.2.1%20URL.pdf" },
            { label: 'Metric: 1.2.1 – Proof – 1', link: "https://gvrs.ac.in/NAAC/C1/1.2/1.2.1/1.2.1%20PROOF%201/1.2.1%20proof%201%20index.pdf" },
            { label: 'Metric: 1.2.1 – Proof – 2', link: "https://gvrs.ac.in/NAAC/C1/1.2/1.2.1/1.2.1%20PROOF%202/1.2.1%20PROOF%202.pdf" },
            { label: 'Metric: 1.2.1 – Data File', link: "https://gvrs.ac.in/NAAC/C1/1.2/1.2.1/1.2.1%20Data%20Sheet.xlsx" },
            { label: 'Metric: 1.2.1 – Proof – 3', link: "https://gvrs.ac.in/NAAC/C1/1.2/1.2.1/1.2.1%20PROOF%203/1.2.1%20proof%203.pdf" },
            { label: 'Metric: 1.2.1 – Proof – 4', link: "https://gvrs.ac.in/NAAC/C1/1.2/1.2.1/1.2.1%20PROOF%204/1.2.1%20PROOF%204.pdf" },
            { label: 'Metric: 1.2.2.1 – Proof', link: "https://gvrs.ac.in/NAAC/C1/1.2/1.2.2/1.2.2%20PROOF.pdf" },
            { label: 'Metric: 1.2.2.1 – Data File', link: "https://gvrs.ac.in/NAAC/C1/1.2/1.2.2/1.2.2%20DATA%20SHEET.xlsx" },
          ]
        },
        {
          title: '1.3 Curriculum Enrichment',
          link: "Link",
          rows: [
            { label: 'Metric: 1.3.1 – Proof', link: "https://gvrs.ac.in/NAAC/C1/1.3/1.3.1/1.3.1%20proof.pdf" },
            { label: 'Metric: 1.3.1 – URL', link: "https://gvrs.ac.in/NAAC/C1/1.3/1.3.1/1.3.1%20url.pdf" },
            { label: 'Metric: 1.3.2.1 – Proof', link: "https://gvrs.ac.in/NAAC/C1/1.3/1.3.2/1.3.2%20proof/1.3.2%20proof.pdf" },
            { label: 'Metric: 1.3.2.1 – Data File', link: "https://gvrs.ac.in/NAAC/C1/1.3/1.3.2/1.3.2%20data%20file/1.3.2%20Data%20sheet.xlsx" },
          ]
        },
        {
          title: '1.4 Feedback System',
          link: "Link",
          rows: [
            { label: 'Metric: 1.4.1 – URL 1', link: "https://gvrs.ac.in/NAAC/C1/1.4/1.4.1%20URL%201.pdf" },
            { label: 'Metric: 1.4.1 – URL 2', link: "https://gvrs.ac.in/NAAC/C1/1.4/1.4.1%20URL%202/1.4.1%20URL%202.pdf" },
            { label: 'Metric: 1.4.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C1/1.4/1.4.1%20PROOF%201.pdf" },
            { label: 'Metric: 1.4.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C1/1.4/1.4.1%20PROOF%202.pdf" },
            { label: 'Metric: 1.4.1 – Proof 3', link: "https://gvrs.ac.in/NAAC/C1/1.4/1.4.1%20PROOF%203.pdf" },
          ]
        },
      ]
    },
    {
      name: 'Criterion 2',
      data: [
        {
          title: 'Criterion 2 – Teaching-learning and Evaluation',
          link: "Link",
          rows: []
        },
        {
          title: '2.1: Student Enrollment and Profile',
          rows: [
            { label: 'Metric: 2.1.1 – URL', link: "https://gvrs.ac.in/NAAC/C2/2.1.1/2.1.1%20url/2.1.1%20URL.pdf" },
            { label: 'Metric: 2.1.1 – Data File', link: "https://gvrs.ac.in/NAAC/C2/2.1.1/2.1.1%20&%202.1.2%20data%20file.xls" },
            { label: 'Metric: 2.1.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C2/2.1.1/2.1.1%20proof%201/2.1.1%20Proof%201.pdf" },
            { label: 'Metric: 2.1.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C2/2.1.1/2.1.1%20proof%202.pdf" },
            { label: 'Metric: 2.1.2 – URL', link: "https://gvrs.ac.in/NAAC/C2/2.1.2/2.1.2%20url/2.1.2%20url.pdf" },
            { label: 'Metric: 2.1.2 – Data File', link: "https://gvrs.ac.in/NAAC/C2/2.1.2/2.1.1%20&%202.1.2%20data%20file.xls" },
            { label: 'Metric: 2.1.2 – Proof 1', link: "https://gvrs.ac.in/NAAC/C2/2.1.2/2.1.2%20proof%201/2.1.2%20proof%201.pdf" },
            { label: 'Metric: 2.1.2 – Proof 2', link: "https://gvrs.ac.in/NAAC/C2/2.1.2/2.1.2%20proof%202.pdf" },
          ]
        },
        {
          title: '2.2: Student Teacher Ratio',
          link: "Link",
          rows: []
        },
        {
          title: '2.3: Teaching – Learning Process',
          link: "Link",
          rows: [
            { label: 'Metric:2.3.1 – Proof', link: "https://gvrs.ac.in/NAAC/C2/2.3/2.3%20proof/2.3%20proof%20hyperlink/2.3%20proof.pdf" },
            { label: 'Metric:2.3.1 – URL', link: "https://gvrs.ac.in/NAAC/C2/2.3/2.3%20url/2.3%20url.pdf" },
          ]
        },
        {
          title: '2.4: Teacher Profile and Quality',
          link: "Link",
          rows: [
            { label: 'Metric: 2.4.1.1 – Proof', link: "https://gvrs.ac.in/NAAC/C2/2.4/2.4.1/2.4.1.1%20proof%201.pdf" },
            { label: 'Metric: 2.4.1.1 – URL', link: "https://gvrs.ac.in/NAAC/C2/2.4/2.4.1/2.4.1.1%20url/2.4.1.1%20url.pdf" },
            { label: 'Metric: 2.4.2.1 – URL', link: "https://gvrs.ac.in/NAAC/C2/2.4/2.4.2.1/2.4.2.1%20URL.pdf" },
            { label: 'Metric: 2.4.2.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C2/2.4/2.4.2.1/2.4.2.1%20proof%201/2.4.2.1%20proof%201.pdf" },
            { label: 'Metric: 2.4.2.1 – Data File', link: "https://gvrs.ac.in/NAAC/C2/2.4/2.4.2.1/2.4.2%20Data%20File.xlsx" },
            { label: 'Metric: 2.4.2.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C2/2.4/2.4.2.1/2.4.2.1%20proof%202.pdf" },
          ]
        },
        {
          title: '2.5: Evaluation Process and Reforms',
          link: "Link",
          rows: [
            { label: 'Metric: 2.5.1 – Proof', link: "https://gvrs.ac.in/NAAC/C2/2.5/2.5.1%20proof.pdf" },
            { label: 'Metric: 2.5.1 – URL', link: "https://gvrs.ac.in/NAAC/C2/2.5/2.5.1%20url.pdf" },
          ]
        },
        {
          title: '2.6: Student Performance and Learning Outcomes',
          link: "Link",
          rows: [
            { label: 'Metric: 2.6.1 – Proof', link: "https://gvrs.ac.in/NAAC/C2/2.6.1/2.6.1%20PROOF.pdf" },
            { label: 'Metric: 2.6.1 – URL', link: "https://gvrs.ac.in/NAAC/C2/2.6.1/2.6.1%20URL.pdf" },
            { label: 'Metric: 2.6.2 – Proof', link: "https://gvrs.ac.in/NAAC/C2/2.6.2/2.6.2%20PROOF.pdf" },
            { label: 'Metric: 2.6.2 – URL', link: "https://gvrs.ac.in/NAAC/C2/2.6.2/2.6.2%20URL.pdf" },
            { label: 'Metric: 2.6.3.2 – URL', link: "https://gvrs.ac.in/NAAC/C2/2.6.3/2.6.3%20URL/2.6.3%20URL.pdf" },
            { label: 'Metric: 2.6.3.2 – Data File', link: "https://gvrs.ac.in/NAAC/C2/2.6.3/2.6.3%20DATA%20FILE.xlsx" },
            { label: 'Metric: 2.6.3.2 – Proof 1', link: "https://gvrs.ac.in/NAAC/C2/2.6.3/2.6.3%20PROOF%201/2.6.3%20PROOF%201.pdf" },
            { label: 'Metric: 2.6.3.2 – Proof 2', link: "https://gvrs.ac.in/NAAC/C2/2.6.3/2.6.3%20PROOF%202.pdf" },
          ]
        },
        {
          title: '2.7: Student Satisfaction Survey',
          link: "Link",
          rows: [
            { label: 'Metric: 2.7.1 – Data File', link: "https://gvrs.ac.in/NAAC/C2/2.7/2.7.1%20Datasheet.xlsx" },
          ]
        },
      ]
    },
    {
      name: 'Criterion 3',
      data: [
        {
          title: 'Criterion 3 – Research, Innovation and Extension',
          link: "Link",
          rows: []
        },
        {
          title: '3.1: Resource Mobilization for Research',
          rows: [
            { label: 'Metric: 3.1.1.1 – Proof', link: "https://gvrs.ac.in/NAAC/C3/3.1/3.1.1%20proof/3.1.1%20PROOF.pdf" },
            { label: 'Metric: 3.1.1.1 – Data File', link: "https://gvrs.ac.in/NAAC/C3/3.1/3.1.1%20datafile.xlsx" },
          ]
        },
        {
          title: '3.2: Innovation Ecosystem',
          link: "Link",
          rows: [
            { label: 'Metric: 3.2.1 – Proof', link: "https://gvrs.ac.in/NAAC/C3/3.2.1/3.2.1%20proof.pdf" },
            { label: 'Metric: 3.2.1 – URL', link: "https://gvrs.ac.in/NAAC/C3/3.2.1/3.2.1%20url.pdf" },
            { label: 'Metric: 3.2.2.1 – Proof', link: "https://gvrs.ac.in/NAAC/C3/3.2/3.2.2/3.2.2%20PROOF/3.2.2.pdf" },
            { label: 'Metric: 3.2.2.1 – Data File', link: "https://gvrs.ac.in/NAAC/C3/3.2/3.2.2/3.2.2-DATA%20FILE.xlsx" },
          ]
        },
        {
          title: '3.3: Research Publications and Awards',
          link: "Link",
          rows: [
            { label: 'Metric: 3.3.1.1 – URL', link: "https://gvrs.ac.in/NAAC/C3/3.3/3.3.1/3.3.1%20url/3.3.1%20URL.pdf" },
            { label: 'Metric: 3.3.1.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C3/3.3/3.3.1/3.3.1%20proof%201/3.3.1-PROOF-1.pdf" },
            { label: 'Metric: 3.3.1.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C3/3.3/3.3.1/3.1.1-PROOF-2.pdf" },
            { label: 'Metric: 3.3.1.1 – Proof 3', link: "https://gvrs.ac.in/NAAC/C3/3.3/3.3.1/3.1.1-PROOF-3.pdf" },
            { label: 'Metric: 3.3.1.1 – Data File', link: "https://gvrs.ac.in/NAAC/C3/3.3/3.3.1/3.3.1%20data%20file.xlsx" },
            { label: 'Metric: 3.3.2.1 – URL', link: "https://gvrs.ac.in/NAAC/C3/3.3.2/3.3.2%20URL/3.3.2%20URL%20index.pdf" },
            { label: 'Metric: 3.3.2.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C3/3.3.2/3.3.2%20PROOF%201.pdf" },
            { label: 'Metric: 3.3.2.1 – Data File', link: "https://gvrs.ac.in/NAAC/C3/3.3.2/3.3.2%20data%20file.xlsx" },
            { label: 'Metric: 3.3.2.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C3/3.3.2/3.3.2%20proof%202/3.3.2%20proof%202%20index.pdf" },
          ]
        },
        {
          title: '3.4: Extension Activities',
          link: "Link",
          rows: [
            { label: 'Metric: 3.4.1 – Proof', link: "https://gvrs.ac.in/NAAC/C3/3.4/3.4.1/3.4.1%20PROOF-1/3.4.1%20PROOF.pdf" },
            { label: 'Metric: 3.4.1 – URL', link: "https://gvrs.ac.in/NAAC/C3/3.4/3.4.1/3.4.1%20PROOF-1/3.4.1%20URL.pdf" },
            { label: 'Metric: 3.4.2 – Proof', link: "https://gvrs.ac.in/NAAC/C3/3.4/3.4.2/3.4.2%20proof.pdf" },
            { label: 'Metric: 3.4.2 – URL', link: "https://gvrs.ac.in/NAAC/C3/3.4/3.4.2/3.4.2%20URL.pdf" },
            { label: 'Metric: 3.4.3.1 – URL', link: "https://gvrs.ac.in/NAAC/C3/3.4/3.4.3/3.4.3%20URL.pdf" },
            { label: 'Metric: 3.4.3.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C3/3.4.3/3.4.3%20PROOF%201/3.4.3%20PROOF.pdf" },
            { label: 'Metric: 3.4.3.1 – Data File', link: "https://gvrs.ac.in/NAAC/C3/3.4.3/3.4-3.xlsx" },
            { label: 'Metric: 3.4.3.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C3/3.4/3.4.3/3.4.3%20PROOF%201/3.4.3%20PROOF.pdf" },
          ]
        },
        {
          title: '3.5: Collaboration',
          link: "Link",
          rows: [
            { label: 'Metric: 3.5.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C3/3.5/3.5.1%20PROOF-1.pdf" },
            { label: 'Metric: 3.5.1 – URL', link: "https://gvrs.ac.in/NAAC/C3/3.5/3.5.1%20url/hyperlink.pdf" },
            { label: 'Metric: 3.5.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C3/3.5/3.5.1%20proof%202/3.5.2%20proof%202.pdf" },
            { label: 'Metric: 3.5.1 – Proof 3', link: "https://gvrs.ac.in/NAAC/C3/3.5/3.5.1%20PROOF-3/3.5.1%20proof%203.pdf" },
            { label: 'Metric: 3.5.1 – Data File', link: "https://gvrs.ac.in/NAAC/C3/3.5/3.5.1%20DATA%20FILE/3.5.1%20DATA%20FILE.xlsx" },
          ]
        },
      ]
    },
    {
      name: 'Criterion 4',
      data: [
        {
          title: 'Criterion 4 – Infrastructure and Learning Resources',
          link: "Link",
          rows: []
        },
        {
          title: '4.1 Physical Facilities',
          rows: [
            { label: 'Metric: 4.1.1 – Proof', link: "https://gvrs.ac.in/NAAC/C4/4.1/4.1.1%20proof/4.1.1%20proof.pdf" },
            { label: 'Metric: 4.1.1 – URL', link: "https://gvrs.ac.in/NAAC/C4/4.1/4.1.1%20url.pdf" },
            { label: 'Metric: 4.1.2.1 – URL', link: "https://gvrs.ac.in/NAAC/C4/4.1/4.1.2/4.1.2%20url.pdf" },
            { label: 'Metric: 4.1.2.1 – Data File', link: "https://gvrs.ac.in/NAAC/C4/4.1/4.1.2/4.1.2%20data%20file.xlsx" },
            { label: 'Metric: 4.1.2.1 – Proof', link: "https://gvrs.ac.in/NAAC/C4/4.1/4.1.2/4.1.2%20proof.pdf" },
          ]
        },
        {
          title: '4.2: Library as a Learning Resource',
          link: "Link",
          rows: [
            { label: 'Metric: 4.2.1 – Proof', link: "https://gvrs.ac.in/NAAC/C4/4.2/4.2.1%20proof/4.2.1%20proof.pdf" },
            { label: 'Metric: 4.2.1 – URL', link: "https://gvrs.ac.in/NAAC/C4/4.2/4.2.1%20url.pdf" },
          ]
        },
        {
          title: '4.3: IT Infrastructure',
          link: "Link",
          rows: [
            { label: 'Metric: 4.3.1 – Proof', link: "https://gvrs.ac.in/NAAC/C4/4.3/4.3.1/4.3.1%20PROOF%201.pdf" },
            { label: 'Metric: 4.3.1 – URL', link: "https://gvrs.ac.in/NAAC/C4/4.3/4.3.1/4.3.1%20URL.pdf" },
            { label: 'Metric: 4.3.2.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C4/4.3/4.3.2.1/4.3.2_1%20PROOF%201.pdf" },
            { label: 'Metric: 4.3.2.1 – URL', link: "https://gvrs.ac.in/NAAC/C4/4.3/4.3.2.1/4.3.2.1%20URL.pdf" },
            { label: 'Metric: 4.3.2.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C4/4.3/4.3.2.1/4.3.2_1%20PROOF%202.pdf" },
          ]
        },
        {
          title: '4.4: Maintenance of Campus Infrastructure',
          link: "Link",
          rows: [
            { label: 'Metric: 4.4.1.1 – URL', link: "https://gvrs.ac.in/NAAC/C4/4.4.1/4.4.1%20url.pdf" },
            { label: 'Metric: 4.4.1.1 – Data File', link: "https://gvrs.ac.in/NAAC/C4/4.4.1/4.4.1%20data%20file.xlsx" },
            { label: 'Metric: 4.4.1.1 – Proof', link: "https://gvrs.ac.in/NAAC/C4/4.4.1/4.4.1%20proof.pdf" },
          ]
        },
      ]
    },
    {
      name: 'Criterion 5',
      data: [
        {
          title: 'Criterion 5 – Student Support and Progression',
          link: "Link",
          rows: []
        },
        {
          title: '5.1: Student Support',
          rows: [
            { label: 'Metric: 5.1.1.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C5/5.1.1/5.1.1%20PROOF%201/5.1.1%20PROOF%201.pdf" },
            { label: 'Metric: 5.1.1.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C5/5.1.1/5.1.1%20PROOF%202.pdf" },
            { label: 'Metric: 5.1.1.1 – Proof 3', link: "https://gvrs.ac.in/NAAC/C5/5.1.1/5.1.1%20PROOF%203.pdf" },
            { label: 'Metric: 5.1.1.1 – URL', link: "https://gvrs.ac.in/NAAC/C5/5.1.1/5.1.1%20URL/5.1.1%20URL.pdf" },
            { label: 'Metric: 5.1.1.1 – Data File', link: "https://gvrs.ac.in/NAAC/C5/5.1.1/5.1.1%20DATA%20FILE.xlsx" },
            { label: 'Metric: 5.1.2 – Proof 1', link: "https://gvrs.ac.in/NAAC/C5/5.1.2/5.1.2%20proof%201/5.1.2%20proof%201.pdf" },
            { label: 'Metric: 5.1.2 – Proof 2', link: "https://gvrs.ac.in/NAAC/C5/5.1.2/5.1.2%20proof%202_compressed.pdf" },
            { label: 'Metric: 5.1.2 – URL', link: "https://gvrs.ac.in/NAAC/C5/5.1.2/5.1.2%20url/5.1.2%20url.pdf" },
            { label: 'Metric: 5.1.2 – Data File', link: "https://gvrs.ac.in/NAAC/C5/5.1.2/5.1.2%20DATA%20FILE.xls" },
            { label: 'Metric: 5.1.3.1 – Proof', link: "https://gvrs.ac.in/NAAC/C5/5.1.3/5.1.3.pdf" },
            { label: 'Metric: 5.1.3.1 – Data File', link: "https://gvrs.ac.in/NAAC/C5/5.1.3/5.1.3%20data%20file.xls" },
            { label: 'Metric: 5.1.4 – URL', link: "https://gvrs.ac.in/NAAC/C5/5.1.4/5.1.4%20URL.pdf" },
            { label: 'Metric: 5.1.4 – Proof 1', link: "https://gvrs.ac.in/NAAC/C5/5.1.4/5.1.4%20PROOF%201.pdf" },
            { label: 'Metric: 5.1.4 – Proof 2', link: "https://gvrs.ac.in/NAAC/C5/5.1.4/5.1.4%20PROOF%202.pdf" },
            { label: 'Metric: 5.1.4 – Proof 3', link: "https://gvrs.ac.in/NAAC/C5/5.1.4/5.1.4%20PROOF%203/5.1.4%20PROOF%203.pdf" },
            { label: 'Metric: 5.1.4 – Proof 4', link: "https://gvrs.ac.in/NAAC/C5/5.1.4/5.1.4%20PROOF%204.pdf" },
            { label: 'Metric: 5.1.4 – Proof 5', link: "https://gvrs.ac.in/NAAC/C5/5.1.4/5.1.4%20PROOF%205.pdf" },
          ]
        },
        {
          title: '5.2: Student Progression',
          link: "Link",
          rows: [
            { label: 'Metric: 5.2.1.2 – URL', link: "https://gvrs.ac.in/NAAC/C5/5.2.1/5.2.1%20URL.pdf" },
            { label: 'Metric: 5.2.1.2 – Proof 1', link: "https://gvrs.ac.in/NAAC/C5/5.2.1/5.2.1%20PROOF%201.pdf" },
            { label: 'Metric: 5.2.1.2 – Proof 2', link: "https://gvrs.ac.in/NAAC/C5/5.2.1/5.2.1%20PROOF%202.pdf" },
            { label: 'Metric: 5.2.1.2 – Data File', link: "https://gvrs.ac.in/NAAC/C5/5.2.1/5.2.2.1%20data%20file.xlsx" },
            { label: 'Metric: 5.2.2.1 – URL', link: "https://gvrs.ac.in/NAAC/C5/5.2.2/5.2.2%20URL.pdf" },
            { label: 'Metric: 5.2.2.1 – Proof', link: "https://gvrs.ac.in/NAAC/C5/5.2.2/5.2.2%20PROOF.pdf" },
            { label: 'Metric: 5.2.2.1 – Data File', link: "https://gvrs.ac.in/NAAC/C5/5.2.2/5.2.2%20DATA%20FILE.xlsx" },
          ]
        },
        {
          title: '5.3: Student Participation and Activities',
          link: "Link",
          rows: [
            { label: 'Metric: 5.3.1.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C5/5.3.1/5.3.1%20PROOF%201.pdf" },
            { label: 'Metric: 5.3.1.1 – URL', link: "https://gvrs.ac.in/NAAC/C5/5.3.1/5.3.1%20URL.pdf" },
            { label: 'Metric: 5.3.1.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C5/5.3.1/5.3.1%20PROOF%202.pdf" },
            { label: 'Metric: 5.3.1.1 – Data File', link: "https://gvrs.ac.in/NAAC/C5/5.3.1/5.3.1%20DATA%20FILE.xlsx" },
            { label: 'Metric: 5.3.2.1 – Proof', link: "https://gvrs.ac.in/NAAC/C5/5.3.2/5.3.2%20PROOF/5.3.2%20PROOF.pdf" },
            { label: 'Metric: 5.3.2.1 – Data File', link: "https://gvrs.ac.in/NAAC/C5/5.3.2/5.3.2%20DATA%20FILE.xlsx" },
          ]
        },
        {
          title: '5.4: Alumni Engagement',
          link: "Link",
          rows: [
            { label: 'Metric: 5.4.1 – Proof', link: "https://gvrs.ac.in/NAAC/C5/5.4.1/5.4%20PROOF.pdf" },
            { label: 'Metric: 5.4.1 – URL', link: "https://gvrs.ac.in/NAAC/C5/5.4.1/5.4%20URL.pdf" },
          ]
        },
      ]
    },
    {
      name: 'Criterion 6',
      data: [
        {
          title: 'Criterion 6 – Governance, Leadership and Management',
          link: "Link",
          rows: []
        },
        {
          title: '6.1: Institutional Vision and Leadership',
          rows: [
            { label: 'Metric: 6.1.1 – Proof', link: "https://gvrs.ac.in/NAAC/C6/6.1.1/6.1.1%20PROOF.pdf" },
            { label: 'Metric: 6.1.1 – URL', link: "https://gvrs.ac.in/NAAC/C6/6.1.1/6.1.1%20URL.pdf" },
          ]
        },
        {
          title: '6.2: Strategy Development and Deployment',
          link: "Link",
          rows: [
            { label: 'Metric: 6.2.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C6/6.2.1/6.2.1%20PROOF%201.pdf" },
            { label: 'Metric: 6.2.1 – URL', link: "https://gvrs.ac.in/NAAC/C6/6.2.1/6.2.1%20URL.pdf" },
            { label: 'Metric: 6.2.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C6/6.2.1/6.2.1%20PROOF%202.pdf" },
            { label: 'Metric: 6.2.2 – Proof 1', link: "https://gvrs.ac.in/NAAC/C6/6.2.2/6.2.2%20PROOF%201.pdf" },
            { label: 'Metric: 6.2.2 – URL', link: "https://gvrs.ac.in/NAAC/C6/6.2.2/6.2.2%20URL.pdf" },
            { label: 'Metric: 6.2.2 – Proof 2', link: "https://gvrs.ac.in/NAAC/C6/6.2.2/6.2.2%20PROOF%202.pdf" },
            { label: 'Metric: 6.2.2 – Proof 3', link: "https://gvrs.ac.in/NAAC/C6/6.2.2/6.2.2%20PROOF%203.pdf" },
          ]
        },
        {
          title: '6.3: Faculty Empowerment Strategies',
          link: "Link",
          rows: [
            { label: 'Metric: 6.3.1 – Proof', link: "https://gvrs.ac.in/NAAC/C6/6.3.1/6.3.1%20PROOF.pdf" },
            { label: 'Metric: 6.3.1 – URL', link: "https://gvrs.ac.in/NAAC/C6/6.3.1/6.3.1%20URL/6.3.1%20URL.pdf" },
            { label: 'Metric: 6.3.2.1 – URL', link: "https://gvrs.ac.in/NAAC/C6/6.3.2.1/6.3.2.1%20URL.pdf" },
            { label: 'Metric: 6.3.2.1 – Proof 1', link: "https://gvrs.ac.in/NAAC/C6/6.3.2.1/6.3.2.1%20PROOF%201.pdf" },
            { label: 'Metric: 6.3.2.1 – Data File', link: "https://gvrs.ac.in/NAAC/C6/6.3.2.1/6.3.2%20DATA%20FILE.xlsx" },
            { label: 'Metric: 6.3.2.1 – Proof 2', link: "https://gvrs.ac.in/NAAC/C6/6.3.2.1/6.3.2.1%20PROOF%202.pdf" },
            { label: 'Metric: 6.3.2.1 – Proof 3', link: "https://gvrs.ac.in/NAAC/C6/6.3.2.1/6.3.2.1%20PROOF%203.pdf" },
            { label: 'Metric: 6.3.3.2 – Proof 1', link: "https://gvrs.ac.in/NAAC/C6/6.3.3/6.3.3%20proof%201.pdf" },
            { label: 'Metric: 6.3.3.2 – URL', link: "https://gvrs.ac.in/NAAC/C6/6.3.3/6.3.3%20url.pdf" },
            { label: 'Metric: 6.3.3.2 – Data File', link: "https://gvrs.ac.in/NAAC/C6/6.3.3/6.3.3.2%20DATA%20FILE.xlsx" },
            { label: 'Metric: 6.3.3.2 – Proof 2', link: "https://gvrs.ac.in/NAAC/C6/6.3.3/6.3.3%20proof%202.pdf" },
            { label: 'Metric: 6.3.3.2 – Proof 3', link: "https://gvrs.ac.in/NAAC/C6/6.3.3/6.3.3%20proof%203.pdf" },
          ]
        },
        {
          title: '6.4: Financial Management and Resource Mobilization',
          link: "Link",
          rows: [
            { label: 'Metric: 6.4.1 – Proof', link: "https://gvrs.ac.in/NAAC/C6/6.4/6.4.1%20proof.pdf" },
            { label: 'Metric: 6.4.1 – URL', link: "https://gvrs.ac.in/NAAC/C6/6.4/6.4.1%20url.pdf" },
          ]
        },
        {
          title: '6.5: Internal Quality Assurance System',
          link: "Link",
          rows: [
            { label: 'Metric: 6.5.1 – Proof', link: "https://gvrs.ac.in/NAAC/C6/6.5.1/6.5.1%20PROOF.pdf" },
            { label: 'Metric: 6.5.1 – URL', link: "https://gvrs.ac.in/NAAC/C6/6.5.1/6.5.1%20URL.pdf" },
            { label: 'Metric: 6.5.2 – Proof 1', link: "https://gvrs.ac.in/NAAC/C6/6.5.2/6.5.2%20proof%201.pdf" },
            { label: 'Metric: 6.5.2 – URL 1', link: "https://gvrs.ac.in/NAAC/C6/6.5.2/6.5.2%20url%201.pdf" },
            { label: 'Metric: 6.5.2 – Proof 2', link: "https://gvrs.ac.in/NAAC/C6/6.5.2/6.5.2%20proof%202.pdf" },
            { label: 'Metric: 6.5.2 – Proof 3', link: "https://gvrs.ac.in/NAAC/C6/6.5.2/6.5.2%20proof%203.pdf" },
            { label: 'Metric: 6.5.2 – URL 2', link: "https://gvrs.ac.in/NAAC/C6/6.5.2/6.5.2%20url%202.pdf" },
          ]
        },
      ]
    },
    {
      name: 'Criterion 7',
      data: [
        {
          title: 'Criterion 7 – Institutional Values and Best Practices',
          link: "Link",
          rows: []
        },
        {
          title: '7.1: Institutional Values and Social Responsibilities',
          rows: [
            { label: 'Metric: 7.1.1 – Proof', link: "https://gvrs.ac.in/NAAC/C7/7.1.1/7.1.1%20PROOF.pdf" },
            { label: 'Metric: 7.1.1 – URL', link: "https://gvrs.ac.in/NAAC/C7/7.1.1/7.1.%20URL.pdf" },
            { label: 'Metric: 7.1.2 – URL', link: "https://gvrs.ac.in/NAAC/C7/7.1.2/7.1.2%20URL.pdf" },
            { label: 'Metric: 7.1.2 – Proof 1', link: "https://gvrs.ac.in/NAAC/C7/7.1.2/7.1.2%20PROOF%201.pdf" },
            { label: 'Metric: 7.1.2 – Proof 2', link: "https://gvrs.ac.in/NAAC/C7/7.1.2/7.1.2%20PROOF%202.pdf" },
            { label: 'Metric: 7.1.2 – Proof 3', link: "https://gvrs.ac.in/NAAC/C7/7.1.2/7.1.2%20PROOF%203.pdf" },
            { label: 'Metric: 7.1.2 – Proof 4', link: "https://gvrs.ac.in/NAAC/C7/7.1.2/7.1.2%20PROOF%204.pdf" },
            { label: 'Metric: 7.1.3 – Proof 1', link: "https://gvrs.ac.in/NAAC/C7/7.1.3/7.1.3%20PROOF%201.pdf" },
            { label: 'Metric: 7.1.3 – URL', link: "https://gvrs.ac.in/NAAC/C7/7.1.3/7.1.3%20URL.pdf" },
            { label: 'Metric: 7.1.3 – Proof 2', link: "https://gvrs.ac.in/NAAC/C7/7.1.3/7.1.3%20PROOF%202.pdf" },
            { label: 'Metric: 7.1.3 – Proof 3', link: "https://gvrs.ac.in/NAAC/C7/7.1.3/7.1.3%20PROOF%203.pdf" },
            { label: 'Metric: 7.1.3 – Proof 4', link: "https://gvrs.ac.in/NAAC/C7/7.1.3/7.1.3%20PROOF%204.pdf" },
            { label: 'Metric: 7.1.4 – Proof', link: "https://gvrs.ac.in/NAAC/C7/7.1.4/7.1.4%20PROOF.pdf" },
            { label: 'Metric: 7.1.4 – URL', link: "https://gvrs.ac.in/NAAC/C7/7.1.4/7.1.4%20URL.pdf" },
          ]
        },
        {
          title: '7.2: Best Practices',
          link: "Link",
          rows: [
            { label: 'Metric: 7.2.1 – URL 1', link: "https://gvrs.ac.in/NAAC/C7/7.2.1%20URL%201.pdf" },
          ]
        },
        {
          title: '7.3: Institutional Distinctiveness',
          link: "Link",
          rows: [
            { label: 'Metric: 7.3.1 – URL 1', link: "https://gvrs.ac.in/NAAC/C7/7.3%20URL%201.pdf" },
          ]
        },
      ]
    }
  ];

  const currentTab = tabs.find(t => t.name === activeTab);
  const handleDownload = (event) => {
    const fileType = event.currentTarget.href.split('.').pop().toLowerCase();
    // console.log("File type:", fileType);
    if (fileType === 'xlsx') {
      const confirmed = window.confirm(`Are you sure you want to download the ${fileType} file?`);
      if (!confirmed) {
        event.preventDefault();
      }
    }
  };
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white shadow-lg rounded-md">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 overflow-x-auto">
        <nav className="-mb-px flex flex-nowrap space-x-4 min-w-max">
          {tabs.map(tab => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.name
                  ? 'border-primaryColor text-primaryColor'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>


      {/* Tab Content */}
      <div className="mt-6">
        {currentTab ? (
          <>
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              NAAC - {currentTab.name}
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                {currentTab.data.map((section, si) => (
                  <React.Fragment key={si}>
                    <thead>
                      <tr className="bg-gray-100 hover:bg-primaryColor transition">
                        <th className="px-5 py-3 border-gray-300 text-left text-sm font-bold text-gray-800">
                          {section.title}
                        </th>
                        <th className="px-5 py-3 border-gray-300 text-left text-sm font-bold text-gray-800">
                          {section.link}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-gray-300 hover:bg-primaryColor transition">
                          <td className="px-5 py-2 border-r border-gray-300 text-sm text-gray-700 hover:text-white transition">
                            {row.label}
                          </td>
                          <td className="px-5 py-2 border-r border-gray-300 text-sm text-gray-700 hover:text-white transition">
                            <a
                              href={row.link}
                              className="text-blue-500 no-underline hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={handleDownload}
                            >
                              Click Here
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </React.Fragment>
                ))}
              </table>
            </div>
          </>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default NAAC;