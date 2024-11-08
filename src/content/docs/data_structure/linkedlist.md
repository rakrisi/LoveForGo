---
title: Linked List
description: A guide in my new Starlight docs site.
---
A linked list is a fundamental data structure consisting of nodes where each node points to the next node in the sequence. This document covers the implementation of a singly linked list in Go, including methods for adding, removing, and deleting nodes.

## Table of Contents

1. [Introduction](#introduction)
2. [Node Structure](#node-structure)
3. [Linked List Structure](#linked-list-structure)
4. [Adding a Node](#adding-a-node)
5. [Removing a Node](#removing-a-node)
6. [Deleting a Node](#deleting-a-node)
7. [Example Usage](#example-usage)

## Introduction

A singly linked list is a list where each element (node) contains a value and a reference to the next node. It allows for efficient insertions and deletions.

## Node Structure

The `Node` struct represents a node in the linked list.

```go
package main

// Node represents a node in a linked list.
type Node struct {
    Value int
    Next  *Node
}
