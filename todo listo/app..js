

  toString() {
    return this.data.map(row => row.join('\t')).join('\n');
  }

}
